const user = {
    name: 'John Doe',
    age: 30,
}

console.log(user.name) // John Doe
console.log(user.age) // 30

const cashMachine = {
    balance: 1000,
    displayBalance: function () {
        console.log(`Your balance is: ` + this.balance)
    },
    deposit: function (amount) {
        this.balance += amount
    },
    withdraw: function (amount) {
        this.balance -= amount
        return amount
    },
}

console.log("Total: " + cashMachine.balance) // 1000
cashMachine.deposit(500)
console.log("Your balance after deposit is: " + cashMachine.balance) // 1500
cashMachine.withdraw(200)
console.log("Your balance after withdraw is: "+ cashMachine.balance) // 1300
cashMachine.displayBalance() // Your balance is: 1300