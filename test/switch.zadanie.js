 // 1 - 5

function getGradeName(grade) {
    let result = ""
    switch (grade) {
    case 5 : 
        return "Very good"
    case 4 :
        return "Good"
    case 3 :
        return "Satisfactory"
    case 2 :
        return "Sufficient"
    case 1 :
        return "Unsatisfactory"
    }
    return result
}

console.log(getGradeName(1));
console.log(getGradeName(2));
console.log(getGradeName(3));
console.log(getGradeName(4));
console.log(getGradeName(5));