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
export default function calculationTax(income: number, share: number): number;
//# sourceMappingURL=calculationTax.d.ts.map