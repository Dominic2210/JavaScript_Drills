// Simple example of error handling using "try and catch" block:
// console.log("Scenario 1: no error handling")
// let a = 5
// let b = 10

// console.log(`a = ${a}`)
// console.log(`b = ${b}`)
// console.log(`a + b = ${a + b}`)
// console.log(`a + b = ${a + b}`)
// console.log(`a + b = ${a + b}`)
// console.log(`a + b = ${a + c}`)
// console.log(`a + b = ${a + b}`)
// console.log(`a + b = ${a + b}`)
// console.log(`a + b = ${a + b}`)
// console.log(`a + b = ${a + b}`)

// In the previous scenario, the code stops executing once it sees an error.
// But when you use try and catch, where you put the code that might have an error in "try" block and then execute the code, the error is simply printed on the screen and the remaining code is executed as usual.

console.log("Scenario 2: Error handling")
let c = 5
let d = 10


console.log(`a = ${c}`)
console.log(`b = ${d}`)
console.log(`a + b = ${c + d}`)
console.log(`a + b = ${c + d}`)
console.log(`a + b = ${c + d}`)
try {
  console.log(`a + b = ${c + a}`)
} catch(err){
  console.log(err)
}
console.log(`a + b = ${c + d}`)
console.log(`a + b = ${c + d}`)
console.log(`a + b = ${c + d}`)
console.log(`a + b = ${c + d}`)


