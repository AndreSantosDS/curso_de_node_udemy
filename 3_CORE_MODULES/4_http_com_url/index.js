const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    /*
    ºrequire('url') carrega o módulo nativo do Node chamado url (ele tem funções para analisar/manipular URLs).
    º.parse(req.url, true) chama a função parse desse módulo e passa a URL que veio na requisição (req.url) como string.
    ºreq.url normalmente contém só o path e a query quando a requisição vem do browser — por exemplo: "/?name=Andre" ou "/produtos?id=10&cat=cadeira".
    ºO segundo argumento true é importante: ele diz para o parse transformar a query string em um objeto (i.e., fazer o parse de ?a=1&b=2 para { a: '1', b: '2' }). Sem esse true, urlInfo.query seria uma string como "a=1&b=2".
    */
    const urlInfo = require('url').parse(req.url, true)

    /*
    ºAqui você pega a propriedade name de dentro do objeto query.
    ºSe a URL for /?name=Andre, então name === 'Andre'.
    ºSe não existir o parâmetro name, o resultado será undefined.
    ºSe existir como ?name= (valor vazio) → name === '' (string vazia).
    ºSe o parâmetro aparecer várias vezes: ?name=Andre&name=Joao → name pode ser um array ['Andre','Joao'] (o parser converte valores repetidos em array).
    */
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    
    if(!name){
        res.end("<h1>Preencha o seu nome:</h1><form method='GET'><input type='text' name='name' /><input type='submit' value='Enviar'/></form>")
    }else{
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`)
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})