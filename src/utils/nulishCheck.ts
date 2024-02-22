/**
 * Filters out undefined values from the input array and joins the remaining values into a string.
 *
 * @param {Array<string | undefined>} values - The input array of strings and undefined values
 * @return {string} The joined string of non-undefined values
 */
const nulishCheck = (values: Array<string | undefined>) =>
  values.filter(value => value !== undefined).join(' ');

export default nulishCheck;
