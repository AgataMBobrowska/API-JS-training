// Test for isAdult function

function isAdult(birthDate) {
    const birthDateObj = new Date(birthDate);
    const currenntDate = new Date();

   const eighteenYearsAgo = new Date;
   eighteenYearsAgo.setFullYear(currenntDate.getFullYear() - 18);

    return birthDateObj <= eighteenYearsAgo;
}

console.log(isAdult('1990-01-01')); // false
console.log(isAdult('2023-01-01')); // false
console.log(isAdult('2020-01-01')); // false    
console.log(isAdult('1980-01-01')); // true
console.log(isAdult('1970-01-01')); // true


function daysToAdulthood(birthDate) {
    const birthDateObj = new Date(birthDate);
    const currenntDate = new Date();

   const eighteenYearsAgo = new Date;
   eighteenYearsAgo.setFullYear(currenntDate.getFullYear() - 18);

    const msToAdulthood = birthDateObj - eighteenYearsAgo;
    const daysToAdulthood = Math.floor(msToAdulthood / (1000 * 60 * 60 * 24));
    return daysToAdulthood
}
console.log(daysToAdulthood('1990-01-01')); // false
console.log(daysToAdulthood('2023-01-01')); // false