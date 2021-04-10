function isUgly(n: number): boolean {
  if (n < 1) {
    return false;
  }
  while (n % 2 === 0) {
    n = n / 2;
  }
  while (n % 5 === 0) {
    n = n / 5;
  }
  while (n % 3 === 0) {
    n = n / 3;
  }
  return n === 1;
};
