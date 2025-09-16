import chalk from 'chalk';
import inquirer from 'inquirer';

inquirer.prompt([{
    name: 'nome',
    message: 'Qual é seu nome?'
},{
    name: 'idade',
    message: 'Qual a sua idade?'
}])
.then(respostas => {
    if(!respostas.nome || !respostas.idade) {
        throw new Error(chalk.bgRed.black('Você deixou de informar algo!'));
    }

    console.log(chalk.bgYellow.black('Olá ' + respostas.nome + ', você tem ' + parseInt(respostas.idade) + ' anos!'));
})
.catch(err => console.log(err));