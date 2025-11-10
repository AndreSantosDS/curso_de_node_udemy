const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// rotas - endpoints
app.get('/', (req, res) => {
  res.json({ message: 'Primeira rota criada com sucesso!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
