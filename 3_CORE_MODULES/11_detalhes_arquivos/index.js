const fs = require("fs")
const path = require("path")

const filepath = path.join(__dirname, "novoarquivo.txt")

/*
1. fs.stat(filepath, function(err, stats){ ... })
ºfs.stat: lê metadados de um arquivo ou diretório (informações do sistema de arquivos).
ºfilepath: caminho do arquivo ou pasta que você quer analisar.
ºstats: objeto retornado com várias informações sobre o arquivo (do tipo fs.Stats).
*/
fs.stat(filepath, function(err, stats){
    if(err){
        console.log(err)
        return
    }
    //isFile() → retorna true se o caminho for um arquivo comum.
    //Exemplo: texto.txt.
    console.log(stats.isFile())
    //isDirectory() → retorna true se o caminho for um diretório/pasta.
    //Exemplo: C:\Users\andre\Documents.
    console.log(stats.isDirectory())
    //isSymbolicLink() → retorna true se for um link simbólico (atalho ou ponteiro para outro arquivo/diretório).
    //Nem sempre aparece em Windows, é mais comum em Linux/Mac.
    console.log(stats.isSymbolicLink())
    //ctime → mostra a data/hora da última mudança no metadado do arquivo.
    //Exemplo: quando o arquivo foi criado ou teve permissões alteradas.
    console.log(stats.ctime)
    //size → mostra o tamanho do arquivo em bytes.
    //Para diretórios, geralmente retorna 0.
    console.log(stats.size)
    console.log(stats)
})