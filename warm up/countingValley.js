const path = "DDUUUUDD"

const counting = (path) => {
  let list = path.split("")
  let upDown = 0
  let valley = 0
  list.forEach(item => {
    if (item === "U") {
      upDown++
      if (upDown === 0) {
        valley++
        // console.log(list.indexOf(item))
      }
    } else {
      upDown--
    }
    console.log(upDown);
  });
  // return valley
}

console.log(counting(path));