'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-QP6KRX4JD6';

/**
 * Google Analytics 4 configured without cookies
 * This avoids the need for cookie consent under GDPR
 * Note: This provides less accurate tracking (no returning user detection)
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Disable all storage to avoid cookies
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });

          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            // Additional privacy settings
            send_page_view: true,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
