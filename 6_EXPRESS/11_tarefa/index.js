const express = require('express')
const app = express()
const contatos = require('./escola')

const port = 5000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use('/escola', contatos)

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, (req,res)=>{
    console.log(`Servidor rodando na porta ${port}`)
})