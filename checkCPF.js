// Quando o cpf existe

console.log('------------------');
console.log({ response: checkCpf(44433322211, accountInfos, personalInfos) });
console.log('------------------');

// Quando o cpf não existe

console.log('------------------');
console.log({ response: checkCpf(44433322255, accountInfos, personalInfos) });
console.log('------------------');