'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Google Analytics 4 component for tracking page views and events
 * Supports both development and production environments
 */

// Google Analytics Measurement ID - replace with your actual GA4 ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  // Load gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    // Enhanced measurement for better tracking
    enhanced_measurement: true,
    // Respect user privacy
    anonymize_ip: true,
    // Custom configuration for portfolio
    custom_map: {
      'custom_parameter_1': 'blog_category',
      'custom_parameter_2': 'project_type'
    }
  });
};

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track blog post reads
export const trackBlogRead = (postTitle, category, readingTime) => {
  trackEvent('blog_read', 'engagement', postTitle, readingTime);
};

// Track project views
export const trackProjectView = (projectName, projectType) => {
  trackEvent('project_view', 'portfolio', projectName, projectType);
};

// Track contact form submissions
export const trackContactSubmission = (method) => {
  trackEvent('contact_submit', 'conversion', method, 1);
};

// Track social media clicks
export const trackSocialClick = (platform, location) => {
  trackEvent('social_click', 'engagement', `${platform}_${location}`, 1);
};

// Track file downloads
export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', 'engagement', fileName, fileType);
};

// Analytics tracking component (internal)
function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      const url = `${window.location.origin}${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
      const title = document.title;

      // Small delay to ensure page title is updated
      setTimeout(() => {
        trackPageView(url, title);
      }, 100);
    }
  }, [pathname, searchParams]);

  return null;
}

// Main Google Analytics component
export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize GA on component mount
    initGA();
  }, []);

  // Wrap the tracker in Suspense to handle useSearchParams
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  );
}

// Hook for easy event tracking in components
export const useAnalytics = () => {
  return {
    trackEvent,
    trackBlogRead,
    trackProjectView,
    trackContactSubmission,
    trackSocialClick,
    trackDownload,
  };
};
