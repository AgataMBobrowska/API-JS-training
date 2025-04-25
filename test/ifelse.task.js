function calculateDiscount(amount) {
    if (amount >= 200) {
        return 0.05
    } else if (amount >= 100) {
        return 0.03
    } else{
        return 0.0
    }
}

console.log(calculateDiscount(50))  // 0.0
console.log(calculateDiscount(150)) // 0.03
console.log(calculateDiscount(250)) // 0.05
console.log(calculateDiscount(350)) // 0.03