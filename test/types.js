
function getDisplayName(firstName, lastName) {
let result = firstName + " " + lastName
return result
}
getDisplayName()

const getDisplayName2 = function(firstName, lastName) {
    let result = firstName + " " + lastName
    return result
}

const getDisplayName3 = (firstName, lastName) => {
    let result = firstName + " " + lastName
    return result
}

console.log(getDisplayName("Anna", "Kotowska")) 
console.log(getDisplayName2("Andrzej", "Kowalski"))
console.log(getDisplayName3("Michał", "Michalski"))