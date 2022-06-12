const { delete } = require("vue/types/umd")

sum(1, 2)
console.log(sum)
var sum = function(x,y) {
  console.log(x+y)
  return x + y
}

sum(1, 2)
console.log(sum)
function sum(x, y) {
  return x + y
}



var obj = {
  name: "hony",
  age: 18
}
console.log(obj);
delete obj['name']
console.log(obj);