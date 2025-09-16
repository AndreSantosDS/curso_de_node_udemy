/*
1- require('readline')
ºImporta o módulo readline, que é nativo do Node.js.
ºEsse módulo permite ler dados linha a linha do console (entrada do usuário).

2- .createInterface({...})
ºCria uma interface de leitura/escrita conectada a um fluxo de entrada (input) e um fluxo de saída (output).

3- input: process.stdin
ºDefine que a entrada de dados virá do teclado (stdin = standard input).

4- output: process.stdout
ºDefine que a saída de dados será exibida no console (stdout = standard output).
*/
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
1- readline.question('Qual é sua linguagem preferida? ', (language) => {...})
ºExibe a pergunta no console:
ºEspera o usuário digitar algo e pressionar Enter.
ºO valor digitado é recebido no parâmetro language da função de callback.

2- if(language === 'Python') {...} else {...}
ºVerifica se a linguagem digitada é "Python".
ºSe for, exibe uma mensagem dizendo que "Isso nem é linguagem".
ºSe não for, exibe a mensagem com a linguagem preferida do usuário.

3- readline.close();
ºFecha a interface readline depois de usar, senão o programa fica aberto esperando mais entradas.
*/
readline.question('Qual é sua linguagem preferida? ', (language) => {
    if(language === 'Python') {
        console.log('Isso nem é linguagem');
    }else{
        console.log(`A minha linguagem preferida é: ${language}`);
    }
  
  readline.close();
});
