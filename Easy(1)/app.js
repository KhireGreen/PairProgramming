let array = [1,2,3,4,5,6,7,8,9,10,11,12]; // created array with numbers 1-12
 const even= [];
 const odd= [];
 array.forEach(number =>{ //this is going to evaluate each number in the array to determine if it is even or odd
    if (number % 2 === 0){ // if the number has a remainder of 0 then it will be pushed into the EVEN array
        even.push(number)
    }
    else{
       odd.push(number); // if the number has a remainder that is not equal to 0 then it will be pushed into the ODD array
    }
 });
 console.log(even); // to see even values
 console.log (odd); // to see odd values