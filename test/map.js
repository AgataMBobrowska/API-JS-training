const numbers = [1, 2 , 3, 4, 5]

const doubledNumbers = numbers.map((x) => x * 2)

console.log("doubled numbers:", doubledNumbers)
console.log("numbers:", numbers)

const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 35 },
    ];

const names = people.map((p => p.name))
console.log("names:", names) 