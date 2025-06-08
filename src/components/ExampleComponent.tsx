'use client';

import { useState } from 'react';
import { Button, Card, Badge } from '@devwise/core';

export interface FeatureCardProps {
  title: string;
  description: string;
  status: 'active' | 'planned' | 'beta';
  className?: string;
}

/**
 * Example site-specific component demonstrating DevWise Core integration.
 * This shows how to build custom components using the core library.
 */
export function FeatureCard({ title, description, status, className }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'active':
        return 'success' as const;
      case 'planned':
        return 'outline' as const;
      case 'beta':
        return 'warning' as const;
      default:
        return 'outline' as const;
    }
  };

  return (
    <Card className={`transition-all hover:shadow-md ${className}`}>
      <div className='p-6'>
        <div className='flex items-start justify-between mb-4'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <Badge variant={getStatusVariant(status)}>{status}</Badge>
        </div>

        <p className={`text-gray-600 mb-4 ${isExpanded ? '' : 'line-clamp-2'}`}>{description}</p>

        <Button variant='ghost' size='sm' onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Show Less' : 'Read More'}
        </Button>
      </div>
    </Card>
  );
}
