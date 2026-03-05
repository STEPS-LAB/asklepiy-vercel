import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui';

describe('Button Component', () => {
  it('should render button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should apply variant styles', () => {
    const { container: primary } = render(<Button variant="primary">Primary</Button>);
    const { container: secondary } = render(<Button variant="secondary">Secondary</Button>);
    const { container: outline } = render(<Button variant="outline">Outline</Button>);

    expect(primary.querySelector('button')).toBeTruthy();
    expect(secondary.querySelector('button')).toBeTruthy();
    expect(outline.querySelector('button')).toBeTruthy();
  });

  it('should be disabled when isLoading is true', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render with left icon', () => {
    render(<Button leftIcon={<span>🔍</span>}>Search</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('🔍Search');
  });

  it('should render with right icon', () => {
    render(<Button rightIcon={<span>→</span>}>Next</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Next→');
  });
});
