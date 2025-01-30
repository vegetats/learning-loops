// When the person`s age is equal to 25
console.log('------------------');
console.log({ response: filterByAge(25, 'equal', personalInfos, accountInfos) });
console.log('------------------');

// When person is youger then 25
console.log('------------------');
console.log({ response: filterByAge(25, 'younger', personalInfos, accountInfos) });
console.log('------------------');

// When person is older then 25
console.log('------------------');
console.log({ response: filterByAge(25, 'older', personalInfos, accountInfos) });
console.log('------------------');