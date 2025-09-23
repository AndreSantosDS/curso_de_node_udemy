//http → módulo nativo do Node.js para criar servidores web.
const http = require("http")
//fs → módulo de manipulação de arquivos (File System).
const fs = require("fs")
//path → módulo que ajuda a trabalhar com caminhos de arquivos (independente do sistema operacional).
const path = require("path")

const port = 3000

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "index.html")
    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile(filePath, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }else{
        const nameNewLine = name + ',\r\n'

        //appendFile adiciona (append) o conteúdo ao final de um arquivo.
        //Se o arquivo não existir, ele cria o arquivo.
        fs.appendFile("arquivo.txt",nameNewLine, function(err, data){
            res.writeHead(302, {
                location: "/"
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
