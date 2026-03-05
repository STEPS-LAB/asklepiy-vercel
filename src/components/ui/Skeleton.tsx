'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { shimmerVariants } from '@/lib/motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded' | 'image';
  animated?: boolean;
}

/**
 * Premium Skeleton Component with Shimmer Animation
 * Used for loading states across the application
 */
export function Skeleton({ className, variant = 'text', animated = true }: SkeletonProps) {
  const variantClasses = {
    text: 'h-4 rounded-sm',
    circular: 'rounded-full',
    rectangular: 'rounded-sm',
    rounded: 'rounded-md',
    image: 'rounded-lg w-full h-48',
  };

  const baseStyles = cn(
    'relative overflow-hidden',
    'bg-gradient-to-r from-medical-surface-200 via-medical-surface-100 to-medical-surface-200',
    'before:absolute before:inset-0',
    'before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent',
    animated && 'before:animate-shimmer',
    variantClasses[variant],
    className
  );

  if (animated) {
    return (
      <motion.div
        className={baseStyles}
        variants={shimmerVariants}
        animate="shimmer"
      />
    );
  }

  return <div className={baseStyles} />;
}

/**
 * Premium Skeleton Card with comprehensive loading states
 */
export function SkeletonCard() {
  return (
    <motion.div
      className="bg-white rounded-sm shadow-medical-md p-6 space-y-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Skeleton variant="circular" className="w-16 h-16 mx-auto" />
      <Skeleton className="h-6 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex justify-between pt-4">
        <Skeleton className="h-10 w-24 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </motion.div>
  );
}

/**
 * Skeleton Text with configurable lines
 */
export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(i === lines - 1 ? 'w-3/4' : 'w-full')}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton Avatar component
 */
export function SkeletonAvatar({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
  };

  return <Skeleton variant="circular" className={cn(sizeClasses[size], className)} />;
}

/**
 * Skeleton Image for image loading states
 */
export function SkeletonImage({ className, aspectRatio = 'square' }: { className?: string; aspectRatio?: 'square' | 'portrait' | 'landscape' | 'video' }) {
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    video: 'aspect-video',
  };

  return <Skeleton variant="image" className={cn(aspectClasses[aspectRatio], className)} />;
}

/**
 * Skeleton List for list items
 */
export function SkeletonList({ items = 5 }: { items?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton variant="circular" className="w-12 h-12 flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton Table for tabular data
 */
export function SkeletonTable({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex gap-4 pb-3 border-b border-medical-surface-200">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-5 flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-10 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton Dashboard for complex layouts
 */
export function SkeletonDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-sm shadow-medical-md p-5 space-y-3">
            <Skeleton variant="circular" className="w-10 h-10" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-sm shadow-medical-md p-6 space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <SkeletonTable rows={6} columns={3} />
        </div>
        <div className="bg-white rounded-sm shadow-medical-md p-6 space-y-4">
          <Skeleton className="h-6 w-1/2" />
          <SkeletonList items={5} />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton Hero Section
 */
export function SkeletonHero() {
  return (
    <div className="relative w-full h-96 lg:h-[500px] bg-medical-surface-100 rounded-sm overflow-hidden">
      <Skeleton className="absolute inset-0" animated />
      <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-end">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-5/6" />
      </div>
    </div>
  );
}

/**
 * Skeleton Navigation Bar
 */
export function SkeletonNavbar() {
  return (
    <div className="bg-white shadow-medical-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton variant="circular" className="w-10 h-10" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-20" />
          ))}
        </div>
        <Skeleton className="h-10 w-28 rounded-md" />
      </div>
    </div>
  );
}
