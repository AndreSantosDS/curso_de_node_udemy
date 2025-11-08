const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/testemongoose2');
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
}

main().catch((err) => console.log(err));

module.exports = mongoose;