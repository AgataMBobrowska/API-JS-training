let numbers = [-3, 1, 2, 3, 4, 5, 20, 105]
console.log(numbers [0])

//dodawanie elemntów do tablicy
numbers.push(200)
console.log("after push:", numbers)

const popedNumber = numbers.pop()
console.log("after pop:", numbers)
console.log("poped number:", popedNumber)

numbers.unshift(100)
console.log("after unshift:", numbers)

numbers.shift()
console.log("after shift:", numbers)

numbers.splice(2, 4)
console.log("after splice:", numbers)

const bigNumbers = numbers.filter((x) =>  x > 2)

console.log("big numbers:", bigNumbers)

console.log("All positive:", numbers.every((x) => x > 0))
console.log("Any negative:", numbers.some((x) => x < 0))
