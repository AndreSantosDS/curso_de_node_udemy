const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// rotas - endpoints
app.post('/createproduct', (req, res) => {
  const { name, price } = req.body;

  if(!name){
    return res.status(422).json({ message: 'O nome do produto é obrigatório.' });
  }

  console.log(`Produto criado: ${name}, Preço: ${price}`);
  res.status(201).json({ message: `Produto ${name} com preço ${price} criado com sucesso!` });
});


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Primeira rota criada com sucesso!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
