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
  
    const nbPeriodes = investDuration * investingFrequency;
    let finalInterest = 0
    let finalAmount = startingCapital;
    const coeff = annualInterestRate / (investingFrequency*100);

    for (let i = 1; i <= nbPeriodes; i++) {
        const interest = finalAmount * coeff;
        finalInterest += interest
        finalAmount += interest + investAmount;
    }
    return finalAmount;
  };
  
  //TODO : add final interest to the return to know what the customer earned in interest