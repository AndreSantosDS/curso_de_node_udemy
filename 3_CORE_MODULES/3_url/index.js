// Aqui você está importando o módulo nativo url do Node.js, que permite trabalhar com URLs de forma fácil.
const url = require('url')
// Definiu uma string com a URL que você quer analisar.
const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira'
// Cria um objeto URL a partir da string da URL. Esse objeto permite acessar partes específicas da URL de forma prática, como host, path, query parameters etc.
const parsedUrl = new url.URL(address)

console.log(parsedUrl)
// host retorna o domínio com a porta, se houver.
console.log(parsedUrl.host)
// pathname retorna o caminho após o domínio.
console.log(parsedUrl.pathname)
// search retorna a query string inteira (tudo depois do ?), incluindo o ?.
console.log(parsedUrl.search)
// searchParams retorna um objeto do tipo URLSearchParams, que permite manipular os parâmetros da query.
console.log(parsedUrl.searchParams)
// get('produtos') pega o valor do parâmetro chamado produtos na query string.
console.log(parsedUrl.searchParams.get('produtos'))