let a = 20
let b = 3

let sum = a + b
let diff = a - b
let product = a * b
let quotient = a / b
let remainder = a % b

console.log("Suma: " + sum)
console.log("Różnica: " + diff)
console.log("Iloczyn: " + product)
console.log("Iloraz: " + quotient)
console.log("Reszta z dzielenia: " + remainder)
console.log(a==b)
console.log(a=="20")
console.log(a==="15")

function isDivisibleBy3(a, b) {
    return a%b === 0
}
console.log(isDivisibleBy3(10, 5))
console.log(isDivisibleBy3(10, 3))
console.log(isDivisibleBy3(10, 2))

let x=200
console.log(x)
x += 10

console.log(x)
