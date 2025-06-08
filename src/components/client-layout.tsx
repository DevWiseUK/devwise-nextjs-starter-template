'use client';

import { ErrorBoundary } from './error-boundary';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // Log to console in development
        console.error('Global error caught:', error, errorInfo);

        // In production, you would send this to your error reporting service
        // Example: Sentry.captureException(error, { extra: errorInfo });
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
