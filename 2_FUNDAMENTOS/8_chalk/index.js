import chalk from 'chalk';

const nota = 5;

if (nota >= 7) {
  console.log(chalk.bold.green('Parabéns! Você foi aprovado!'));
} else {
  console.log(chalk.bgRed('Você precisa fazer a prova de recuperação!'));
}