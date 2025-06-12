'use client';

import { Button } from '@devwise/core';
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<ErrorFallbackProps>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

// Default error fallback component
function DefaultErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className='flex min-h-[400px] flex-col items-center justify-center space-y-4 p-8 text-center'>
      <div className='space-y-2'>
        <h2 className='text-2xl font-bold text-destructive'>Something went wrong</h2>
        <p className='text-muted-foreground max-w-md'>
          An unexpected error occurred. This has been logged and we&apos;re working to fix it.
        </p>
        {process.env.NODE_ENV === 'development' && error && (
          <details className='mt-4 text-left'>
            <summary className='cursor-pointer text-sm font-medium'>
              Error details (development only)
            </summary>
            <pre className='mt-2 whitespace-pre-wrap text-xs text-destructive'>
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
      <div className='flex gap-2'>
        <Button onClick={resetError} variant='outline'>
          Try again
        </Button>
        <Button onClick={() => window.location.reload()} variant='secondary'>
          Reload page
        </Button>
      </div>
    </div>
  );
}

/**
 * Error Boundary component that catches JavaScript errors in child components
 *
 * How it works:
 * 1. Wraps child components and monitors for errors during rendering
 * 2. When an error occurs, catches it and shows fallback UI
 * 3. Logs error details for debugging
 * 4. Provides reset functionality to recover from errors
 *
 * Usage:
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method catches errors during rendering
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to show fallback UI
    return {
      hasError: true,
      error,
    };
  }

  // This lifecycle method is called when an error is caught
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details
    console.error('Error Boundary caught an error:', error, errorInfo);

    // Update state with error info
    this.setState({
      error,
      errorInfo,
    });

    // Call optional error handler
    this.props.onError?.(error, errorInfo);

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error tracking service
      // errorTrackingService.captureException(error, { extra: errorInfo });
    }
  }

  // Reset error state - allows component to try rendering again
  resetError = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
    });
  };

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI or default
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;

      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    // No error, render children normally
    return this.props.children;
  }
}

// Hook for functional components to trigger errors (useful for testing)
export function useErrorHandler() {
  return (error: Error) => {
    throw error;
  };
}
