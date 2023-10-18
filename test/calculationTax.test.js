import calculationTax from '../src/calculationTax.js';

test('Should return an integer', () => { 
    expect(calculationTax(55950, 3)).toBe(2598);
 })