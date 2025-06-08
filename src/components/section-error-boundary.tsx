'use client';

import React from 'react';
import { ErrorBoundary } from './error-boundary';
import { Button, Card } from '@devwise/core';

interface SectionErrorBoundaryProps {
  children: React.ReactNode;
  sectionName?: string;
  showRetry?: boolean;
}

export function SectionErrorBoundary({
  children,
  sectionName = 'section',
  showRetry = true,
}: SectionErrorBoundaryProps) {
  const fallback = (
    <Card className='p-6 text-center border-red-200 bg-red-50'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='flex items-center justify-center h-10 w-10 rounded-full bg-red-100'>
          <svg
            className='h-5 w-5 text-red-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>

        <div>
          <h3 className='text-sm font-medium text-red-800'>Unable to load {sectionName}</h3>
          <p className='text-xs text-red-600 mt-1'>
            Something went wrong while loading this content.
          </p>
        </div>

        {showRetry && (
          <Button
            size='sm'
            variant='outline'
            onClick={() => window.location.reload()}
            className='text-red-700 border-red-300 hover:bg-red-100'
          >
            Retry
          </Button>
        )}
      </div>
    </Card>
  );

  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>;
}
