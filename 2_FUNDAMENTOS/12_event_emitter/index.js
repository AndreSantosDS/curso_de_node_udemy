/*
O código usa o EventEmitter do Node.js, que é um sistema de eventos parecido com o que existe no navegador (com addEventListener). Ele permite registrar ouvintes (listeners) e depois emitir eventos para disparar esses ouvintes.

ºImporta a classe EventEmitter.
ºCria um objeto eventEmitter que vai ser usado para escutar e emitir eventos.
*/
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//Aqui registramos um ouvinte para o evento chamado 'start'.
//Quando o evento 'start' for emitido, essa função será executada e mostrará "Durante".
eventEmitter.on('start', () => {
    console.log('Durante');
});

//Imprime "Antes" imediatamente, antes de qualquer evento acontecer.
console.log('Antes');

//Aqui o evento 'start' é emitido.
//Isso dispara todos os ouvintes ligados a 'start' (no caso, a função que imprime "Durante").
eventEmitter.emit('start');

//Por fim, imprime "Depois", logo após o evento ter sido emitido.
console.log('Depois');