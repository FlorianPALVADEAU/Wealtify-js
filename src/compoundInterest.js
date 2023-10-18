/**
 * Calculate compound interest on a given investment.
 *
 * @param {number} startingCapital Your starting capital.
 * @param {number} investingFrequency The frequency of investing (in MONTH per year).
 * @param {number} annualInterestRate The annual interest rate.
 * @param {number} investAmount The amount invested at each investing action.
 * @param {number} investDuration The duration of investing (in YEARS).
 * @returns { number, number } The final amount of the investing action.
 */
export default function calculateCompoundInterest (startingCapital, investingFrequency, annualInterestRate, investAmount, investDuration) {
    
    annualInterestRate /= 100;
  
    const nbPeriodes = investDuration * investingFrequency;
    let finalInterest = 0
    let finalAmount = startingCapital;

    for (let i = 1; i <= nbPeriodes; i++) {
        const interest = finalAmount * (annualInterestRate / investingFrequency);
        finalInterest += interest
        finalAmount += interest + investAmount;
    }
    return finalAmount;
  };
  