const arr = [2, 3, 4 ,1, 5]

function minimumSwaps(arr) {    
  let minimalSwap = 0;
  
  for(let i = 0; i < arr.length - 1; i++) {
      let min = i
    for (let j = i; j < arr.length; j++) {
          if(arr[min] > arr[j]){
            min = j
          }
      }
      
      if(i !== min){
          let tmp = arr[i]
          arr[i] = arr[min]
          arr[min] = tmp   
          minimalSwap++
      }
  }
  
  
  return minimalSwap
}
console.log(minimumSwaps(arr))