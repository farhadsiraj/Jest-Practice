function fizzbuzz(n) {
  if (isDivisibleByThree(n) && isDivisibleByFive(n)) {
    return "fizzbuzz";
  }
  if (isDivisibleByThree(n)) {
    return "fizz";
  }
  if (isDivisibleByFive(n)) {
    return "buzz";
  }
  return String(n);
}

function isDivisibleByThree(n) {
  return n % 3 === 0;
}

function isDivisibleByFive(n) {
  return n % 5 === 0;
}

module.exports = fizzbuzz;
