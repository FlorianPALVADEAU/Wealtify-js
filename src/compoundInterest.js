/**
 * Calculate compound interest on a given investment.
 *
 * @param {number} startingCapital Your starting capital.
 * @param {number} investingFrequency The frequency of investing (in MONTH per year).
 * @param {number} annualInterestRate The annual interest rate.
 * @param {number} investAmount The amount invested at each investing action.
 * @param {number} investDuration The duration of investing (in YEARS).
 * @returns { number, number, number } The final amount of the investing action, the final interest and the final amount invested.
 */
export default function calculateCompoundInterest (startingCapital, investingFrequency, annualInterestRate, investAmount, investDuration) {
  
    const nbPeriodes = investDuration * investingFrequency;
    let finalAmount = startingCapital;
    const coeff = annualInterestRate / (investingFrequency*100);
    let finalInterest = 0
    
    for (let i = 1; i <= nbPeriodes; i++) {
        const interest = finalAmount * coeff;
        finalAmount += interest + investAmount;
        finalInterest += interest;
    }
    const finalData = {
        "totalAmount": Math.floor(finalAmount),
        "totalInterest": Math.floor(finalInterest),
        "totalAmountInvested": Math.floor(finalAmount - finalInterest)
    }

    return finalData;
  }