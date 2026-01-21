/**
 * Calculate estimated reading time for text content
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 wpm for Norwegian)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute = 200): number {
  // Remove code blocks and excessive whitespace
  const cleanText = text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Count words (split by whitespace)
  const wordCount = cleanText.split(/\s+/).filter(word => word.length > 0).length;

  // Calculate reading time in minutes (round up)
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  // Minimum 1 minute
  return Math.max(1, readingTime);
}

/**
 * Format reading time to human-readable string
 * @param minutes - Reading time in minutes
 * @returns Formatted string (e.g., "5 min", "1 time 30 min")
 */
export function formatReadingTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `${hours} ${hours === 1 ? 'time' : 'timer'}`;
  }

  return `${hours} ${hours === 1 ? 'time' : 'timer'} ${remainingMinutes} min`;
}

/**
 * Get reading time badge variant based on length
 * @param minutes - Reading time in minutes
 * @returns Tailwind color classes for badge
 */
export function getReadingTimeBadgeVariant(minutes: number): string {
  if (minutes <= 5) {
    return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
  } else if (minutes <= 15) {
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  } else if (minutes <= 30) {
    return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
  } else {
    return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
  }
}
