import { describe, test, expect } from 'vitest';
import twClasses from '../twClasses';

describe('twClasses', () => {
  test('should return an empty string for empty input array', () => {
    expect(twClasses([])).toEqual('');
  });

  test('should return the element for input array with one element', () => {
    expect(twClasses(['text-center'])).toEqual('text-center');
  });

  test('should join the elements with a space for input array with multiple elements', () => {
    expect(twClasses(['text-center', 'text-bold'])).toEqual(
      'text-center text-bold'
    );
  });

  test('should return an empty string for undefined input array', () => {
    expect(twClasses(undefined)).toEqual('');
  });
});
