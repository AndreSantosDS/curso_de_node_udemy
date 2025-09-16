const inquirer = require('inquirer');

inquirer.prompt([{
    name: 'pergunta1',
    message: 'Qual a primeira nota?'
},{
    name: 'pergunta2',
    message: 'Qual a segunda nota?'
}])
.then(respostas => {
    console.log(respostas);
    const media = ((parseFloat(respostas.pergunta1) + parseFloat(respostas.pergunta2)) / 2).toFixed(2);
    console.log(`A média é: ${media}`);
})
.catch(err => console.log(err));