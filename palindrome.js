function reverse (num) {
    return num.toString().reverse;
}

function palidromeChecker (num) {
    return reverse(num) === num.toString();

};


let compare = 1;
for (let i = 999; i > 100; i--) {
    for (let j = 999; j >= i; j--) {
        if (palidromeChecker(i*j) === true) {
            if (compare < i*j) {
                compare = i*j;
            }
        }
    }
}

console.log(compare);


