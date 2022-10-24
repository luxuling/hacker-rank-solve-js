const querry = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];

const n = 5;

function arrayManipulation() {
  const arr = new Array(n + 2).fill(0);
  querry.forEach(([a, b, k]) => {
    arr[a] += k;
    arr[b + 1] -= k;
  });

  let tmp = 0;
  let max = 0;

  arr.forEach((val) => {
    tmp += val;
    if (tmp > max) {
      max = tmp;
    }
  });
  return max;
}

console.log(arrayManipulation());
