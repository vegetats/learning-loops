// first
function mergeArrays(firstArray, secondArray) {
    const newArray = firstArray.map((acc) => {
        const person = personalInfos.find((per) => per.cpf === acc.cpf);
        return {
            account: acc.account,
            clientType: acc.clientType,
            cpf: acc.cpf,
            name: person.name,
            age: person.age
        }
})

return newArray;
}
export { mergeArrays };
// first

// second
// const newArray = mergeArrays(accountInfos, personalInfos);

// newArray.sort(function(a, b) {
// return a.name.localeCompare(b.name);
// });
// second

// third
function filterByAge(age, typeOfOperation, persons, accounts) {
    let filteredPersons = [];
    switch(typeOfOperation) {
        case 'equal':
            filteredPersons = persons.filter(person => person.age == age)
            break;
        case 'older':
            filteredPersons = persons.filter(person => person.age > age)
            break;
        case 'younger':
            filteredPersons = persons.filter(person => person.age < age)
            break;
        default: 
            filteredPersons = 'tipo de operaçãõ não informada'
            break;
            
    }
    
    return filteredPersons;
    }    
// third

// fourth
function countTypeOfAccounts(accounts) {
    let countOnAccountTypes = {}; 

    accounts.forEach(acc => {
        countOnAccountTypes[acc.clientType] 
        ? countOnAccountTypes[acc.clientType]++ 
        : countOnAccountTypes[acc.clientType] = 1;
        
    });
    return countOnAccountTypes;
}
// fourth