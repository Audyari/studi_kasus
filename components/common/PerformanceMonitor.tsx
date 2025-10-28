'use client';

import { useEffect } from 'react';

// Performance monitoring component
const PerformanceMonitor = () => {
  useEffect(() => {
    // Track Largest Contentful Paint (LCP)
    if ('LargestContentfulPaint' in window) {
      new PerformanceObserver(entryList => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // Track First Input Delay (FID)
    if ('FirstInput' in window) {
      new PerformanceObserver(entryList => {
        const entries = entryList.getEntries();
        const firstInput = entries[0];
        console.log('FID:', firstInput.processingStart - firstInput.startTime);
      }).observe({ entryTypes: ['first-input'] });
    }

    // Track Cumulative Layout Shift (CLS)
    if ('LayoutShift' in window) {
      let clsValue = 0;
      new PerformanceObserver(entryList => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
