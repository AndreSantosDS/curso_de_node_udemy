// Importa a biblioteca minimist, que serve para transformar os argumentos da linha de comando em um objeto JavaScript mais fácil de manipular.
const minimist = require('minimist')

/*
1 - process.argv é um array que contém todos os argumentos passados ao executar o script no Node.
ºprocess.argv[0] → caminho do Node.
ºprocess.argv[1] → caminho do arquivo .js que você está executando.
ºA partir de process.argv[2] vêm os argumentos que você realmente passou.
Por isso, fazemos .slice(2) → para ignorar os dois primeiros elementos e pegar só o que interessa.

2 - minimist(...) transforma os argumentos em um objeto.
*/
const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']

console.log(nome, profissao)

console.log(`Olá ${nome}, você é ${profissao}.`)