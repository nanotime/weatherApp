import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { WeatherCard } from './WeatherCard';
import '@testing-library/jest-dom/vitest';

describe('Card', () => {
  test('renders without crashing', () => {
    const tempRange = ['20', '30'];
    const { getByText } = render(
      <WeatherCard title="Test Title" tempRange={tempRange}>
        <div>Test Children</div>
      </WeatherCard>
    );
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Children')).toBeInTheDocument();
    expect(getByText('20 30')).toBeInTheDocument();
  });
});
