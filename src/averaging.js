export default function average(data) {
  if (!Array.isArray(data) || !data.every(Number.isFinite)) {
    return NaN;
  }
  const sum = data.reduce((a, b) => a + b);
  return sum / data.length;
} 