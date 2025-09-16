//Aqui você importa o módulo fs (File System), que serve para trabalhar com arquivos no Node.js (ler, escrever, deletar etc.).
const fs = require('fs');

//Apenas imprime a mensagem "Inicio" no console.
console.log('Inicio');

/*
Usa a função writeFileSync, que grava dados em um arquivo de forma síncrona (bloqueia o programa até terminar).
º'arquivo.txt' → nome do arquivo que será criado (ou sobrescrito).
º'oi' → conteúdo que será escrito dentro do arquivo.
Se o arquivo não existir, ele será criado. Se já existir, será sobrescrito.
*/
fs.writeFileSync('arquivo.txt', 'oi');

console.log('Fim');