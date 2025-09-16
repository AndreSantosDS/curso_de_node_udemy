// Aqui você está importando o módulo nativo path do Node.js, que serve para trabalhar com caminhos de arquivos e diretórios.
// Ele ajuda a manipular e resolver caminhos de forma mais fácil e compatível entre sistemas operacionais (Windows, Linux, etc.).
const path = require('path');

// A função path.extname() recebe como parâmetro um caminho de arquivo (ou simplesmente o nome de um arquivo) e retorna a extensão dele, ou seja, a parte depois do último ponto ".".
const extensio = path.extname('arquivo.php');

console.log(extensio);