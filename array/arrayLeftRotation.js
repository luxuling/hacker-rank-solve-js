const arr = [1, 2, 3, 4, 5]

const rotation = (d) => {
  let rotated = []
  for (let i = d; i < arr.length; i++){
    rotated.push(arr[i])
  }
  for (let i = 0; i < d; i++){
    rotated.push(arr[i])
  }
  return rotated
}
console.log(rotation(4));
