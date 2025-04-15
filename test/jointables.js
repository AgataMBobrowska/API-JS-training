const t = [23, 12, 5, 8, 235];

const result = t.join(", ");

console.log(result); // 23,12,5,8,235

const t2 = [236, 132, 53, 81, 1235];

const newArray = t.concat(t2);

console.log(newArray); // [23, 12, 5, 8, 235, 236, 132, 53, 81, 1235]
console.log(t); // [23, 12, 5, 8, 235]  
console.log(t2); // [236, 132, 53, 81, 1235]


t.sort((a, b) => a - b); // sortuje rosnąco
console.log(t); // [5, 8, 12, 23, 235]
console.log(t.reverse()); // [235, 23, 12, 8, 5]
console.log(t); // [5, 8, 12, 23, 235]