/**
 * Joins an array of arrays of strings into a single string,
 * with each subarray's elements separated by a space.
 *
 * @param {string[][]} matrix - The array of arrays of strings to be joined.
 * @return {string} The joined string.
 */
const flatenizeTw = (matrix: string[][]) => matrix.flat().join(' ');

export default flatenizeTw;
