function countPrimeNumbers() {
    function isPrime(n) {
        let max = Math.sqrt(n);
        for (let i = 2; i <= max; i++) {
            if (n % i == 0)
                return false;
        }
        return n > 1;
    }

    let primeCount = 0;
    for (let i = 2; i <= 100; i++) {
        if(isPrime(i))
            primeCount++;
    }

    return primeCount;
}

let perfStart = performance.now();
for (let i = 0; i < 100; i++) {
    setTimeout(countPrimeNumbers, 0);
}
let perfEnd = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${perfEnd - perfStart} milliseconds.`);