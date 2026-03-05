import { describe, it, expect } from 'vitest';
import { cn, formatDateUA, formatPriceUA, isValidEmail, isValidPhoneUA, getInitials } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('foo', 'bar')).toBe('foo bar');
      expect(cn('foo', null, 'bar')).toBe('foo bar');
      expect(cn('foo', { bar: true, baz: false })).toBe('foo bar');
    });

    it('should handle Tailwind conflicts', () => {
      expect(cn('px-4', 'px-6')).toBe('px-6');
      expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    });
  });

  describe('formatDateUA', () => {
    it('should format date in Ukrainian locale', () => {
      const date = '2026-03-05';
      const formatted = formatDateUA(date);
      expect(formatted).toContain('2026');
      expect(formatted).toContain('березня');
    });
  });

  describe('formatPriceUA', () => {
    it('should format price in Ukrainian Hryvnia', () => {
      expect(formatPriceUA(1000)).toBe('1 000 ₴');
      expect(formatPriceUA(500)).toBe('500 ₴');
    });
  });

  describe('isValidEmail', () => {
    it('should validate email format', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('isValidPhoneUA', () => {
    it('should validate Ukrainian phone number', () => {
      expect(isValidPhoneUA('0501234567')).toBe(true);
      expect(isValidPhoneUA('+380501234567')).toBe(true);
      expect(isValidPhoneUA('380501234567')).toBe(true);
      expect(isValidPhoneUA('12345')).toBe(false);
    });
  });

  describe('getInitials', () => {
    it('should generate initials from name', () => {
      expect(getInitials('John Doe')).toBe('JD');
      expect(getInitials('Олександр Коваленко')).toBe('ОК');
      expect(getInitials('Single')).toBe('S');
    });
  });
});
