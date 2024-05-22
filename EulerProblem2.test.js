const sumEvenFibonacci = require('./EulerProblem2.js');

describe("Even Fibonacci Numbers", () => {
    test('the sum of even-valued Fibonacci sequence numbers under 4 million is', () => {
        expect(sumEvenFibonacci(100)).toBe(44);
    });
});