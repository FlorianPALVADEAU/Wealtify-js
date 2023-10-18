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
