const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // created array to store both prime/non-prime numbers

function findPrime(numArray) { // created function to locate prime numbers and sort them from non-prime numbers
  var primeArray = []; // this will store all prime #'s
  var count = 0; //counter for prime #'s

  for (let i = 0; i < numArray.length; i++) {  // creating a loop so it can increment up from the last number
    var err = 0;
    
    for (var p = 2; p <= numArray[i] / 2; p++) { // loop is to locate/store all prime numbers
      if (numArray[i] % p === 0) {
        err = 1;
        break;
      }
    }
    
    if (err === 0) { //if the number can be divided into a whole number then it is prime
      primeArray[count++] = numArray[i]; // the prime numbers will be stored here
    }
  }
  
  console.log(`Output: ${primeArray}`); // to show all prime numbers
}
console.log(`Input: ${numArray}`);
findPrime(numArray);