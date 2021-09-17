const divisible = (divisor, number) => number % divisor === 0; 

function fizzbuzz(number) {
    if(typeof number !== 'number'){
        console.log("Error the argument should be a number");
        return null;
    }
    const fizz = 'fizz';
    const buzz = 'buzz';
    
    if (divisible(15, number)) {
        return fizz + buzz;
    }
    if (divisible(3, number)) {
        return fizz;
    }
    if (divisible(5, number)) {
        return buzz;
    }
    return number;
}

function print(number) {
    for (i = 1; i <= number; i++) {
        console.log(`${i} -> ${fizzbuzz(i)}`);
    }
}

print(16);

module.exports = fizzbuzz;