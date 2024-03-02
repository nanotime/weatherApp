import { describe, test, expect } from 'vitest';
import nulishCheck from '../nulishCheck';

describe('nulishCheck', () => {
  test('should join defined strings into a single string', () => {
    const input = ['apple', 'banana', 'cherry'];
    const result = nulishCheck(input);
    expect(result).toEqual('apple banana cherry');
  });

  test('should return an empty string when input contains only undefined values', () => {
    const input = [undefined, undefined, undefined];
    const result = nulishCheck(input);
    expect(result).toEqual('');
  });

  test('should join defined strings and ignore undefined values', () => {
    const input = ['apple', undefined, 'cherry', undefined, 'grape'];
    const result = nulishCheck(input);
    expect(result).toEqual('apple cherry grape');
  });

  test('should return an empty string when input array is empty', () => {
    const input: Array<string | undefined> = [];
    const result = nulishCheck(input);
    expect(result).toEqual('');
  });
});
