const generate = (numRows) =>
  eR(numRows).map((_, level) => eR(level + 1).map((_, r) => nCr(level, r)));

const nCr = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));
const factorial = (n) => eR(n + 1).reduce((a, e, i) => (i > 0 ? a * i : a), 1);
const eR = (n) => new Array(n).fill(0);
