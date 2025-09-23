// Importa o módulo http do Node.js. Esse módulo permite criar servidores web sem precisar de frameworks externos.
const http = require("http")

// Define a porta onde o servidor vai escutar as requisições.
// No caso, http://localhost:3000
const port = 3000

/*
ºhttp.createServer() cria um servidor.
ºEle recebe uma função callback que é chamada toda vez que chega uma requisição.
    ºreq → representa a requisição (quem acessa, URL, cabeçalhos etc.).
    ºres → representa a resposta que o servidor vai enviar de volta.
*/
const server = http.createServer((req, res) => {
    // res.write("Oi HTTP") → escreve uma mensagem como resposta.
    res.write("Oi HTTP")

    // Finaliza a resposta que o servidor está enviando para o cliente.
    // Diz ao Node.js: "Pronto, terminei de enviar a resposta. Pode encerrar a conexão com o cliente."
    // Sem ele, a conexão fica aberta e o navegador (ou cliente HTTP) fica esperando mais dados, como se a resposta ainda não tivesse acabado.
    res.end()
})

// Faz o servidor escutar na porta definida (3000).
//Quando ele estiver ativo, executa a função que mostra no console: "Servidor rodando na porta: 3000".
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})