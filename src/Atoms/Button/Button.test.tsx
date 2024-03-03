import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders a button with default theme', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText(/Click me/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn', 'btn-primary', 'btn-md');
  });

  test('renders a button with specified theme and tailwind classes', () => {
    render(
      <Button
        theme="btn-secondary"
        tw={['text-blue-500', 'hover:text-blue-700']}
      >
        Click me
      </Button>
    );
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'btn',
      'btn-secondary',
      'text-blue-500',
      'hover:text-blue-700'
    );
  });

  test('renders a button with custom size and tailwind classes', () => {
    render(
      <Button size="btn-lg" tw={['text-red-500', 'hover:text-red-700']}>
        Click me
      </Button>
    );
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'btn',
      'btn-primary',
      'btn-lg',
      'text-red-500',
      'hover:text-red-700'
    );
  });
});
