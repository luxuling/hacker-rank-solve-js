const c = [0, 1, 0, 0, 1 ,0]

const jumping = () => {
  let result = 0;
  let i = 0;
  while(i < c.length - 1) {
     if(i+ 1 < c.length && c[i + 2] === 0) i++;
     i++;
     result++;
  }
  return result;
}
console.log(jumping());