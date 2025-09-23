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
        fs.writeFile("arquivo.txt",name, function(err, data){
            /*
            1️⃣ res.writeHead(statusCode, headers)
            ºres é o objeto de resposta HTTP, criado quando você recebe uma requisição (req) no seu servidor.
            ºwriteHead() envia o cabeçalho da resposta HTTP para o cliente.
            ºO primeiro parâmetro (302) é o status code HTTP, que indica o resultado da requisição.
            ºO segundo parâmetro é um objeto com cabeçalhos HTTP, no caso { location: "/" }.

            2️⃣ 302 – Redirecionamento temporário
            ºO código 302 significa Found / Redirecionamento temporário.
            ºQuando o navegador recebe uma resposta 302, ele entende: “O recurso que você pediu foi encontrado, mas em outro endereço. Vá até lá.”
            ºÉ usado para redirecionar o usuário temporariamente para outra página.
            */
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
