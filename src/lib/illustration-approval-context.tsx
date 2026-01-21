'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ApprovalData {
  status: 'pending' | 'approved' | 'rejected';
  feedback?: string;
  updatedAt?: string;
}

interface IllustrationApprovalContextType {
  approvals: Record<string, ApprovalData>;
  isLoading: boolean;
  isApproved: (id: string) => boolean;
  isRejected: (id: string) => boolean;
  getApprovalStatus: (id: string) => ApprovalData | null;
}

const IllustrationApprovalContext = createContext<IllustrationApprovalContextType>({
  approvals: {},
  isLoading: true,
  isApproved: () => true, // Default to showing if no data
  isRejected: () => false,
  getApprovalStatus: () => null,
});

export function IllustrationApprovalProvider({ children }: { children: ReactNode }) {
  const [approvals, setApprovals] = useState<Record<string, ApprovalData>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApprovals = async () => {
      try {
        const response = await fetch('/api/admin/illustration-feedback');
        if (response.ok) {
          const data = await response.json();
          setApprovals(data);
        }
      } catch (error) {
        console.error('Failed to fetch illustration approvals:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApprovals();
  }, []);

  const isApproved = (id: string): boolean => {
    const approval = approvals[id];
    // If no approval data exists, show the illustration (pending)
    // If approved, show it
    // If rejected, don't show it
    if (!approval) return true; // Show if not reviewed yet
    return approval.status !== 'rejected';
  };

  const isRejected = (id: string): boolean => {
    const approval = approvals[id];
    return approval?.status === 'rejected';
  };

  const getApprovalStatus = (id: string): ApprovalData | null => {
    return approvals[id] || null;
  };

  return (
    <IllustrationApprovalContext.Provider value={{ approvals, isLoading, isApproved, isRejected, getApprovalStatus }}>
      {children}
    </IllustrationApprovalContext.Provider>
  );
}

export function useIllustrationApproval() {
  return useContext(IllustrationApprovalContext);
}
