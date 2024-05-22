const sumMultiples = require('./EulerProject1');

describe("EulerProject", () => {
    test('the sum of multiples of 3 and 5 under 10 is 23', () => {
      expect(sumMultiples(10)).toBe(23);
    });

    test('the sum of multiples of 3 and 5 under 1000 is 23', () => {
        expect(sumMultiples(1000)).toBe(233168);
      });
});