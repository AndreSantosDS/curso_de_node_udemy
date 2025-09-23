const http = require("http")
const fs = require("fs")
const path = require("path")
const url = require("url")

const port = 3000

const server = http.createServer((req, res) => {
    const notFoundPath = path.join(__dirname, "404.html")
    const q = url.parse(req.url, true)
console.log(q)
    let filename = q.pathname.substring(1)
    if (filename === "") {
        filename = "index.html" // página padrão
    }

    if (filename.endsWith(".html")) {
        const filepath = path.join(__dirname, filename)

        if (fs.existsSync(filepath)) {
            fs.readFile(filepath, (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        } else {
            fs.readFile(notFoundPath, (err, data) => {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        }
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.end("Requisição inválida.")
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
