import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom/vitest';

describe('Input', () => {
  test('renders input with placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('handles value change', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" value="yo yo" />
    );
    const input = getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'new value' } });
    // expect(onchange).toHaveBeenCalled();
    expect(input.value).toBe('new value');
  });
});
