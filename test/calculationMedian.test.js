import median from '../src/calculationMedian';

describe('median', () => {
  it('should return NaN if the data is not an array', () => {
    const data = 'foo';
    expect(median(data)).toBeNaN();
  });
  it('should return NaN if the array have nont only number', () => {
    const data = ['foo', 2, 3];
    expect(median(data)).toBeNaN();
  });
  it('should return the median of an array with an odd number of elements', () => {
    const data = [1, 2, 3, 4, 5];
    expect(median(data)).toBe(3);
  });
  it('shlourd return the meidan with a decimal number', () => {
    const data = [1, 2, 3, 4, 5, 6];
    expect(median(data)).toBe(3.5);
  })
});
