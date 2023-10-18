/**
 * Calculates the median of a series of numbers.
 *
 * The median is the middle number in a sorted list of numbers. If there are two middle numbers, the median is the average of those two numbers.
 *
 * @param {number[]} data An array of numbers.
 * @returns {number} The median of the numbers in the array.
 */
export default function median(data) {
  if (!Array.isArray(data) || !data.every(Number.isFinite)) {
    return NaN;
  } 
  data.sort((a, b) => a - b);
  if (data.length % 2 === 1) {
    return data[Math.floor(data.length / 2)];
  }
  else {
    return (data[Math.floor(data.length / 2)] + data[Math.floor(data.length / 2) - 1]) / 2;
  }
}