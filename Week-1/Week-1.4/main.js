function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfNums(n) {
  var sum = 0;
  for (let i = 0; i < n; i++) sum += i;

  return sum;
}

function sumOfSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

console.log(sumOfNums(64));
console.log(sumOfSomething(2, 4, square));
console.log(sumOfSomething(6, 4, cube));
