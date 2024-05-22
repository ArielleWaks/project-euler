function primeSieve (num) {
    let primeBoolean = Array(num+1).fill(true);
    primeBoolean[0] = false;
    primeBoolean[1] = false;

    let primeArray = [];

    for (let i = 2; i <= num; i++) {
        if (primeBoolean[i] === true) {
            primeArray.push(i);
            if (i <= Math.sqrt(num)) {
                for (let j = i; j <= Math.round(num/i); j++) {
                    primeBoolean[(i*j)] = false;
                }
            } else {
                continue;
            }
        }
    }

    return primeArray;
}





function largestPrimeFactor (num) {
    
    let primes = primeSieve(Math.round(Math.sqrt(num)));

    if (primes.length === 0) {
        return num;
    }

    let primeFactors = [];

    for (const primeNum of primes) {
        if (num % primeNum === 0) {
            primeFactors.push(primeNum);
        }
    }

    return primeFactors.at(-1);

}



module.exports = primeSieve;