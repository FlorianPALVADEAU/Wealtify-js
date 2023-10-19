import calculateCompoundInterest from '../src/compoundInterest';

describe('calculateCompoundInterest', () => {
  test('should correctly calculate compound interest', () => {
    const startingCapital = 2000; // 2000 bucks of starting capital
    const investingFrequency = 12; // monthly
    const annualInterestRate = 5; // 5% interest rate
    const investAmount = 100; // 100 bucks at each investing action
    const investDuration = 12; // 12 years
    const expectedResult = 23316; // the result we expect to have, calculated manually.

    const result = calculateCompoundInterest(startingCapital, investingFrequency, annualInterestRate, investAmount, investDuration);
    const finalResult = result.totalAmount

    expect(Number.isFinite(finalResult)).toBe(true);
    expect(finalResult).toBeCloseTo(expectedResult);
  });
});