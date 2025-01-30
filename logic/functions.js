// merging
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
// merging


// ordering
personalInfos.sort(function(a, b) {
    return a.name.localeCompare(b.name);
    });
// ordering


// filtering by age
function filteringByAge(age, typeOfOperation, persons, accounts) {
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
// filtering by age


// type of account
function countTypeOfAccounts(accounts) {
    let countOnAccountTypes = {}; 

    accounts.forEach(acc => {
        countOnAccountTypes[acc.clientType] 
        ? countOnAccountTypes[acc.clientType]++ 
        : countOnAccountTypes[acc.clientType] = 1;
        
    });
    return countOnAccountTypes;
}
// type of account


// check cpf
function checkCpf(cpf, firstArray, secondArray) {
    const acc = firstArray.find(acc => acc.cpf === cpf);

    if(!acc) return ` O cpf ${cpf} nao existe no nosso banco de dados`;
    
        const person = secondArray.find(per => per.cpf === cpf);

        return {
            account: acc.account,
            clientType: acc.clientType,
            cpf: acc.cpf,
            name: person.name,
            age: person.age
        }
}
// check cpf
