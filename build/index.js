import calculationTax from '../src/calculationTax.js'
import averaging from '../src/averaging.js'
import calculationMedian from '../src/calculationMedian.js'
import compoundInterest from '../src/compoundInterest.js'

console.log('Simulateur d\'impôt', calculationTax(55950, 3))
console.log('Moyenne', averaging([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log('Medianne', calculationMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 3, 13, 132]))
console.log('Intérêts composés', compoundInterest(1000, 12, 10, 100, 10))
