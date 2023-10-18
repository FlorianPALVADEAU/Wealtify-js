/**
 * Calculates the income tax payable by a household, taking into account the number of tax shares.
 *
 * The income tax in France is calculated based on a system of tax brackets. The amount of tax is calculated by applying a different tax rate to each tax bracket.
 *
 * This function uses a table of tax brackets to calculate the income tax. Each row in the table contains the following information:
 *
 * - The minimum amount of the tax bracket.
 * - The maximum amount of the tax bracket.
 * - The tax rate to apply to the tax bracket.
 *
 * The function calculates the income tax by iterating over the table of tax brackets and applying the appropriate tax rate to each tax bracket.
 *
 * @param {number} income The total income of the household.
 * @param {number} share The number of tax shares of the household.
 * @returns {number} The amount of income tax payable by the household.
*/
export default function calculationTax(income, share){
    
    let tax = 0;
    let incomeByShare = income / share;
    let step = new Array();
    step.push([0, 10777, 0]);
    step.push([10778, 27478, 0.11]);
    step.push([27479, 78570, 0.30]);
    step.push([78571, 168994, 0.41]);
    step.push([168995, Infinity, 0.45]);

    for(let i = 0; i < step.length; i++){
        if (incomeByShare >= step[i][0]){
            if (incomeByShare > step[i][1]){
                tax += step[i][1] * step[i][2];
            }else if (incomeByShare >= step[i][0] && incomeByShare <= step[i][1]){
                tax += (incomeByShare - step[i][0])*step[i][2];
            }
        }
    }

    return Math.round(tax*share, 2);
}
