const fs = require("fs")
const path = require("path")

const arqAntigo = path.join(__dirname, "arquivo.txt")
const arqNovo = path.join(__dirname, "novoarquivo.txt")

/*
O método fs.rename() serve para:
ºRenomear um arquivo (mudar apenas o nome);
ºMover um arquivo (se você passar caminhos de pastas diferentes para arqAntigo e arqNovo).
*/
fs.rename(arqAntigo,arqNovo, function(err){
    if(err){
        console.log(err)
        return
    }

    console.log("Arquivo renomeado!")
})