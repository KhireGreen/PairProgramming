// MEDIUM 3

function isLargest(num1, num2) {
  if (num2) {
      return isLargest(num2, num1 % num2);
  } else {
      return Math.abs(num1);
  }
}

console.log(isLargest(336,360));