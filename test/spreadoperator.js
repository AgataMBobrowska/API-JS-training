const people = [
    { firstName: 'Carl', lastName: 'Smith'},
    { firstName: 'Bob', lastName: 'Johnson'},
];
let additionalProperties = {
    age: 30,
    gender: "Male"
};

function addProperties(array, additionalProperties) {
    const result = array.map(person => {
        return { ...person, ...additionalProperties }
    })
    return result;
}

console.log(addProperties(people, additionalProperties));