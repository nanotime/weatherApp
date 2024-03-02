/**
 * A function that takes an array of strings and joins them with a space, or returns an empty string if the input is undefined.
 *
 * @param {string[]} tw - An optional array of strings to be joined.
 * @return {string} The joined string, or an empty string if the input is undefined.
 */
const twClasses = (tw?: string[]) => {
  if (!tw) return '';
  return tw.join(' ');
};

export default twClasses;
