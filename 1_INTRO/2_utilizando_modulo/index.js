//const fs = require("fs"): importa o módulo fs (file system), que permite trabalhar com arquivos
const fs = require("fs") 
// fs.readFile(...): lê o conteúdo do arquivo arquivo.txt.
// 'utf8': define a codificação do texto.
/*(err, data) => { ... }: função de callback executada após a leitura.

Se ocorrer um erro (err), ele é exibido no console.
Caso contrário, o conteúdo do arquivo (data) é exibido no console. */
fs.readFile('arquivo.txt', 'utf8', (err, data) =>{
    if(err){
        console.log(err)
    }

    console.log(data)
})