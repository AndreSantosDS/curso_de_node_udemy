const express = require('express')
const router = express.Router()
const pool = require('../db/conn')

router.post('/inserir', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone

    const sql = `INSERT INTO contatos (??, ??, ??) VALUES (?, ?, ?)`
    const data = ['nome', 'email', 'telefone', nome, email, telefone]

    pool.query(sql, data, function(err, result){
        if(err){
            console.log(err)
            return res.status(500).json({ error: "Erro ao inserir contato." })
        }

        res.status(201).json({
            message: "Contato adicionado com sucesso!",
            contato: {
                id: result.insertId,
                nome,
                email,
                telefone
            }
        })
    })
})

router.get('/resgatar/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM contatos WHERE ?? = ?`

    const data = ['id', id]

     pool.query(sql, data, function(err, result){
        if(err){
            console.log(err)
            return res.status(500).json({ error: "Erro ao buscar contatos" });
        }

        res.json(result)
    })
})

router.post('/update/:id', (req,res)=>{
    const id = req.params.id
    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone

    const sql = `UPDATE contatos SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['nome', nome, 'email', email, 'telefone', telefone, 'id', id]

    pool.query(sql, data, function(err, result){
        if(err){
            console.log(err)
            res.status(500).json({ error: "Erro ao atualizar contato" });
        }

        res.json({
            message: "Contatos alterado com sucesso!",
            contato: {
                id: result.insertId,
                nome,
                email,
                telefone
            }
        })
    })
})

router.post('/remover/:id', (req, res) => {
    const id = req.params.id

    const sql = `DELETE FROM contatos WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, function(err, result){
        if(err){
            console.log(err)
        }

        res.json({
            message: "Contatos removidos com sucesso!",
        })
    })
})

module.exports = router
