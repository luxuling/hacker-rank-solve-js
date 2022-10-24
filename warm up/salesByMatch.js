const arr = [1, 2, 1, 2, 3, 4];

function match() {
  let pair = 0;
  let socks = {};
  arr.forEach((item) => {
    if (!socks[item]) {
      socks[item] = 0;
    }
    socks[item] = socks[item] + 1;

    if (!(socks[item] % 2)) {
      pair = pair + 1;
    }
  });
  return pair;
}

console.log(match());
