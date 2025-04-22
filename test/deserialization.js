const userPreference = {
    theme: 'dark',
    language: 'en',
    notifications: true,
    fontsize: 14,
     setTheme: function (theme) {
        this.theme = theme
    },
    someUndefinedProp: undefined,
someNullProp: null,
}

const json = JSON.stringify(userPreference)

console.log(json) // {"theme":"dark","language":"en","notifications":true,"fontsize":14}
console.log(json) // string