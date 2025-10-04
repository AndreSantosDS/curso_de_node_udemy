const express = require('express')
const pool = require('./db/conn')
const contatosRouter = require('./router') // renomeei para evitar conflito de nomes

const app = express()

app.use(express.json())
app.use('/contatos', contatosRouter)

app.get('/', (req, res) => {
    const sql = "SELECT * FROM contatos"

    pool.query(sql, function(err, data){
        if(err){
            console.log(err)
            return res.status(500).json({ error: "Erro ao buscar contatos" })
        }
        res.json(data)
    })
})

app.listen(3000, function(err){
    if(err){
        console.log(err)
    }
    console.log('Servidor funcionando na porta 3000')
})
