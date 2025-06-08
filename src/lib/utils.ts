import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge class names with clsx
 * This is the only utility not in DevWise Core as it's project-specific
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
