const accountInfos = [
    { account: 1001, clientType: "Gold", cpf: 12345678901 },
    { account: 1002, clientType: "Silver", cpf: 98765432109 },
    { account: 1003, clientType: "Platinum", cpf: 11122233344 },
    { account: 1004, clientType: "Gold", cpf: 55566677788 },
    { account: 1005, clientType: "Basic", cpf: 99988877766 },
    { account: 1006, clientType: "Silver", cpf: 44433322211 },
    { account: 1007, clientType: "Platinum", cpf: 66655544433 },
    { account: 1008, clientType: "Gold", cpf: 33322211100 },
    { account: 1009, clientType: "Basic", cpf: 77788899900 },
    { account: 1010, clientType: "Silver", cpf: 88899977766 },
];

const personalInfos = [
    { name: "Clara", age: 25, cpf: 12345678901 },
    { name: "Bob", age: 30, cpf: 98765432109 },
    { name: "Leticia", age: 28, cpf: 11122233344 },
    { name: "Diana", age: 35, cpf: 55566677788 },
    { name: "Nathalia", age: 22, cpf: 99988877766 },
    { name: "Frank", age: 40, cpf: 44433322211 },
    { name: "Julia", age: 27, cpf: 66655544433 },
    { name: "Hannah", age: 32, cpf: 33322211100 },
    { name: "Ivan", age: 29, cpf: 77788899900 },
    { name: "Amanda", age: 26, cpf: 88899977766 },
];

const newArray = mergeArrays(accountInfos, personalInfos);

newArray.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});
console.log(newArray);
