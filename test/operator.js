//operator trójargumentowy

function checkEvenOdd(number) {
   return number === 0 ? "zero" 
   : number % 2 === 0 ? "even" : "odd";
}

// 1 warunek - boolean
// 2 wartość zwrócona z operatora, jeżeli warunek jest prawdziwy
// 3 wartość zwrócona z operatora, jeżeli warunek jest fałszywy

const numberStatus = checkEvenOdd(0);
console.log(numberStatus); 

function markExam(points) {
   return points >= 70 ? "Pass" : "Fail";
}

const examResult = markExam(50);
console.log(examResult);