import { urlParams } from '../urlParams';

describe('urlParams', () => {
  it('should return an empty string for an empty object', () => {
    expect(urlParams({})).toBe('');
  });

  it('should return a string with a single key-value pair', () => {
    expect(urlParams({ foo: 'bar' })).toBe('foo=bar');
  });

  it('should return a string with multiple key-value pairs', () => {
    expect(
      urlParams({
        foo: 'bar',
        baz: 123,
        qux: true,
      })
    ).toBe('foo=bar&baz=123&qux=true');
  });

  it('should omit falsy values', () => {
    expect(
      urlParams({
        foo: 'bar',
        baz: false,
        qux: 0,
        quxx: '',
      })
    ).toBe('foo=bar');
  });
});
