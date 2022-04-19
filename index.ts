const AbsoluteSumMinization = (sum: number[]): any => {
  const isEven = sum.length % 2 === 0;

  return isEven ? sum[sum.length / 2 - 1] : sum[Math.floor(sum.length / 2)];
};

console.log(AbsoluteSumMinization([1, 2, 3, 4, 5, 6]));
console.log(AbsoluteSumMinization([1, 2, 3, 4, 5, 6, 7]));
