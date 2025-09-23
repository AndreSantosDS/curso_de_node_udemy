//http → módulo nativo do Node.js para criar servidores web.
const http = require("http")
//fs → módulo de manipulação de arquivos (File System).
const fs = require("fs")
//path → módulo que ajuda a trabalhar com caminhos de arquivos (independente do sistema operacional).
const path = require("path")

const port = 3000

const server = http.createServer((req, res) => {
    console.log(__dirname, "msg.html")
    /*
    __dirname → caminho da pasta atual.
    "msg.html" → arquivo que queremos ler.
    path.join() → cria um caminho absoluto correto para qualquer sistema
    1️⃣ path.join()
        ºÉ uma função do módulo path que une pedaços de caminho de forma segura, independente do sistema operacional.
        ºWindows usa \ e Linux/Mac usam / como separador de pastas. path.join() cuida disso automaticamente.
        c:\Users\andre\Documents\estudos\curso_de_node_udemy\3_CORE_MODULES\5_fs msg.html
        ºExemplo:
            c:\Users\andre\Documents\estudos\curso_de_node_udemy\3_CORE_MODULES\5_fs\msg.html
    */
    const filePath = path.join(__dirname, "msg.html")

    fs.readFile(filePath, (err, data) => {
        /*
        1️⃣ res
        ºÉ o objeto de resposta fornecido pelo Node.js quando alguém faz uma requisição ao servidor.
        ºEle controla tudo o que você envia de volta ao navegador (código de status, cabeçalhos, conteúdo, etc.).

        2️⃣ writeHead()
        ºMétodo que define o cabeçalho da resposta HTTP.
        ºUm cabeçalho é como um cartão de informações que o servidor envia para o navegador, dizendo:
            ºSe a requisição deu certo ou não.
            ºQue tipo de conteúdo está sendo enviado.
            ºOutras informações (cookies, cache, etc.).

        3️⃣ 200
        ºÉ o código de status HTTP.
        º200 significa OK, ou seja, a requisição foi processada com sucesso.

        4️⃣ { 'Content-Type': 'text/html' }
        ºÉ um objeto que define os cabeçalhos da resposta.
        ºContent-Type indica qual tipo de conteúdo o navegador vai receber.
        ºtext/html significa que o conteúdo é HTML, então o navegador vai interpretar como página web.
        */
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
    })
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
