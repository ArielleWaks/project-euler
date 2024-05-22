
function sumEvenFibonacci(maxNumber) {
    let fibonacciSmaller = 0;
    let fibonacciBigger = 1;
    let fibonacciSum = 0;
    let fibNext = 1;

    while (fibNext <= maxNumber) {

        if (fibNext % 2 === 0) {
            fibonacciSum += fibNext;
            console.log("sum: " + fibonacciSum);
        };
        
        fibonacciSmaller = fibonacciBigger;
        fibonacciBigger = fibNext;
        fibNext = fibonacciSmaller + fibonacciBigger;
        console.log(fibNext);

    };

    return fibonacciSum;

};

sumEvenFibonacci(4000000);







module.exports = sumEvenFibonacci;