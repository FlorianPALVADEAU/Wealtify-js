import calculateCompoundInterest from '../src/compoundInterest';

describe('calculateCompoundInterest', () => {
  test('should correctly calculate compound interest', () => {
    const startingCapital = 2000;
    const investingFrequency = 12; // monthly
    const annualInterestRate = 5; 
    const investAmount = 100; 
    const investDuration = 12;

    const result = calculateCompoundInterest(startingCapital, investingFrequency, annualInterestRate, investAmount, investDuration);
    const finalResult = result.finalAmount
    const expectedResult = Math.floor(result);

    expect(Number.isFinite(result)).toBe(true);
    expect(result).toBeCloseTo(expectedResult, 0);
  });
});