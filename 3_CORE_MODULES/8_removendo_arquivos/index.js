const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "arquivo.txt")

//No Node.js, o módulo fs (File System) serve para manipular arquivos e pastas.
// Dentro dele, a função fs.unlink é usada para remover (deletar) um arquivo do disco.
fs.unlink(filePath, function(err){
    if(err){
        console.log(err)
        return
    }
    console.log("Arquivo removido!")
})