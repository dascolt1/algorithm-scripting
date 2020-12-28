//function to get the sum of all prime numbers using Sieve of Eratosthenes
//test -> sumPrimes(10) returns 17

function sumPrimes(num) {
  let sieve = [], i, j, primes = [];
    for (i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
  return primes.reduce((accumulator, currentValue) => accumulator + currentValue)
}
