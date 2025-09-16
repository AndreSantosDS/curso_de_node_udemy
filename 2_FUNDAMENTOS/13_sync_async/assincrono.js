//Aqui você importa o módulo fs (File System), que serve para trabalhar com arquivos no Node.js (ler, escrever, deletar etc.).
const fs = require('fs');

//Apenas imprime a mensagem "Inicio" no console.
console.log('Inicio');  

/*
1- fs.writeFile('arquivo.txt', 'oi', (err) => { ... })
ºPede para o Node criar/escrever o arquivo arquivo.txt com o conteúdo "oi".
ºEssa função é assíncrona, ou seja, ela não bloqueia a execução do programa. O Node registra essa tarefa e continua rodando o restante do código.
ºQuando a escrita terminar, a função de callback (err) => { ... } será executada.

2- if (err) throw err;
ºDentro da função de callback, verifica se houve algum erro durante a escrita do arquivo.
ºSe houver um erro, ele lança uma exceção (throw err), interrompendo a execução.

3- setTimeout(() => { console.log('Arquivo criado'); }, 1000);
ºSe não houver erro, ele agenda uma outra tarefa para ser executada após 1 segundo (1000 milissegundos).
ºEssa tarefa imprime "Arquivo criado" no console.
ºO uso do setTimeout aqui é apenas para simular um atraso, mostrando que a mensagem será exibida depois de um tempo.
*/
fs.writeFile('arquivo.txt', 'oi', (err) => {
    if (err) throw err;
    setTimeout(() => {
        console.log('Arquivo criado');
    }, 1000);
});

console.log('Fim');