import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from './Card';
import '@testing-library/jest-dom/vitest';

describe('Card', () => {
  test('renders children properly', () => {
    const { getByText } = render(<Card>Test Content</Card>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  test('applies tailwind classes correctly', () => {
    const { container } = render(
      <Card tw={['bg-blue-500']}>Test Content</Card>
    );
    expect(container.firstChild).toHaveClass('card bg-blue-500');
  });

  test('renders the card title', () => {
    const { getByText } = render(
      <Card>
        <Card.Title>Test Title</Card.Title>
      </Card>
    );
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  test('renders the card actions', () => {
    const { getByText } = render(
      <Card>
        <Card.Actions>
          <button>Test Actions</button>
        </Card.Actions>
      </Card>
    );
    expect(getByText('Test Actions')).toBeInTheDocument();
  });
});
