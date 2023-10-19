function interest(time, rate, capital) {
  if (isNaN(time) || time <= 0) {
    return NaN;
  }
  if (isNaN(rate) || rate < 0 || rate > 100) {
    return NaN;
  }
  if (isNaN(capital) || capital <= 0) {
    return NaN;
  }

  rateMonthly = rate / 12 / 100;
  interest = time * rateMonthly * capital;
  return interest;
}