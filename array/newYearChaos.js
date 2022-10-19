const q = [
  8,
  1,
  [1, 2, 5, 3, 4, 7, 8, 6]
];

function minimumBribes(q) {
  let swaps = 0;
  let min = q.length;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      console.log("Too chaotic");
      return `Too chaotic`;
    }
    if (q[i] > i + 1) {
      swaps += q[i] - (i + 1);
    } else {
      if (min > q[i]) {
        min = q[i];
      } else if (q[i] != min) {
        swaps++;
      }
    }
  }
  console.log(swaps);
}

minimumBribes(q);
