const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const produtos = [
  {
    id: "1",
    nome: "Notebook",
    preco: 3500.00,
    categoria: "Eletrônicos",
    estoque: 12
  },
  {
    id: "2",
    nome: "Smartphone",
    preco: 2200.00,
    categoria: "Eletrônicos",
    estoque: 30
  },
  {
    id: "3",
    nome: "Camiseta",
    preco: 59.90,
    categoria: "Vestuário",
    estoque: 50
  },
]

app.get('/', (req, res) => {
    res.render('home', {produtos})
})

app.get('/produto/:id', (req, res) => {
    const id = req.params.id
    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        return res.status(404).send('Produto não encontrado')
    }

    res.render('produto', {produto})
})

app.listen(3000, () => {
    console.log("App funcionando!")
})