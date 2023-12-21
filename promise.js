function func(resolve, reject){
  resolve(10);
}

let promise = new Promise(func);
promise.then((val) => {
  return val +1
}).then((val) => {
  console.log(val)
  return val +1
}).then((val) => {
  console.log(val)
  return val +1
}).then((val) => {
  console.log(val)
}).catch(err => {
  console.log(err)
})