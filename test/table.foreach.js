const t = [23, 12, 5, 9, 45]


function sum(arr){
    let sum = 0
    arr.forEach((element) => sum = sum + element)
    return sum
}

function average (arr){
    let result = sum(arr) / arr.length
    return Math.floor(result)
}
console.log(sum(t))
console.log(average(t))