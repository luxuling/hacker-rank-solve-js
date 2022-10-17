const arr = [
[1, 1, 1 ,0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
]

const hourGlassed = () => {
  let maxValue = -63
  for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; j++){
      let top = arr[i][j] + arr[i][j+1] + arr[i][j+2] 
      let mid = arr[i+1][j+1] 
      let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      
      const currentValue = top + mid + bottom
      maxValue = Math.max(maxValue, currentValue)
    }
  }

  console.log(maxValue)
}
hourGlassed()