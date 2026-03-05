'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-medical-text-primary mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={type}
            className={cn(
              'w-full px-4 py-3',
              'bg-white border rounded-sm',
              'text-medical-text-primary',
              'placeholder-medical-text-tertiary',
              'transition-all duration-300',
              'focus:outline-none focus:border-medical-accent-600 focus:ring-2 focus:ring-medical-accent-200',
              'hover:border-medical-primary-400',
              error && 'border-medical-status-error focus:border-medical-status-error focus:ring-medical-status-error/20',
              icon && 'pl-12',
              className
            )}
            {...props}
          />
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-medical-text-tertiary">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <motion.p
            className="mt-1 text-sm text-medical-status-error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
