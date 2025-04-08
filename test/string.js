let greeting = "Hello"
let userName = "Mike"
let welcomeMessage = greeting + ", " + userName + "!"

let welcomeMessage2 = greeting.concat(" ", userName, "!")
console.log(welcomeMessage)
console.log(welcomeMessage2)


// Wyodrębnienie części tekstu
const subsrt = welcomeMessage.substring(7, 11)
console.log("Substring:", subsrt)

const slice = welcomeMessage.slice(7, 11)
console.log("Slice:", slice)

const negativeSubstring = welcomeMessage.substring(-5)
console.log("Negative substring:", negativeSubstring)

const negativeSlice = welcomeMessage.slice(-5)
console.log("Negative slice:", negativeSlice)

const indexOfUserName = welcomeMessage.indexOf(userName)

const sliceCalculated = welcomeMessage.slice(indexOfUserName, indexOfUserName + userName.length)
console.log("Slice calculated:", sliceCalculated)

// Inicjały
let fullName = "Nelly Smith"
console.log("Initials:", fullName[0], fullName[6])

function getInitials(name) {
    let indexOfSpace = name.indexOf(" ")
    return name[0] + name[indexOfSpace + 1]
}

console.log("Initials:", getInitials(fullName))
console.log("Initials:", getInitials("John Doe"))
console.log("Initials:", getInitials("Anna Marie"))

// Interpolacja stringów 
const productName = "chleb"
const quantity = 5
const unitPrice = 10.5
const totalPrice = quantity * unitPrice

function generateInvoice(productName, quantity, unitPrice, totalPrice) {
    return `Nazwa produktu: ${productName}, cena jednostkowa: ${unitPrice} zł, ilość: ${quantity}, totalna cena: ${totalPrice} zł`
}
console.log(generateInvoice(productName, quantity, unitPrice, totalPrice))
