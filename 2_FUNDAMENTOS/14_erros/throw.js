const x = '10'

// checar se x é número
if(!Number.isInteger(x)) {
    throw new Error('x não é um número inteiro');
}

console.log('Continuando o código...');