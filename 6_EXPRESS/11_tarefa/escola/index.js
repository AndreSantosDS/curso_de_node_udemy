const express = require('express')
const router = express.Router()

const path = require("path")

const basePath = path.join(__dirname, '../templates')

router.get('/contatos', (req,res)=>{
    res.sendFile(`${basePath}/contatos.html`)
})

router.get('/cursos', (req,res)=>{
    res.sendFile(`${basePath}/cursos.html`)
})

module.exports = router