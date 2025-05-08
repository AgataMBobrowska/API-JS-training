const date = new Date();
const day = 0;

console.log(day);

switch (day) {
    case 1 : 
        console.log("Poniedziałek");
        break;
    case 2 :
        console.log("Wtorek");
        break;
    case 3 :
        console.log("Środa");
        break;
    case 4 :
        console.log("Czwartek");
        break;
    case 5 :
        console.log("Piątek");
        break;
    default:
        console.log("Weekend");
        break;
}
