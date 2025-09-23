const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    //Define o código de status da resposta como 200, que significa "OK" (requisição bem-sucedida).
    res.statusCode = 200

    // Define o cabeçalho HTTP da resposta.
    //Aqui, o Content-Type indica que o corpo da resposta será do tipo HTML (não texto puro).
    //Isso faz com que o navegador interprete a resposta como uma página HTML.
    res.setHeader('Content-Type', 'text/html')

    //res.end() finaliza a resposta e envia os dados para o cliente.
    //O conteúdo enviado é uma string HTML.
    //O navegador renderiza isso como uma página com:
        //Um título (<h1>) escrito "Olá, este é meu primeiro server com HTML!"
        //Um parágrafo (<p>) escrito "Testando atualização."
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1> <p>Testando atualização.</p>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})