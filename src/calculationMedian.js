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