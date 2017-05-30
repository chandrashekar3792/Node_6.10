
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
let m = 0;
// myEmitter.on('event', () => {
//   console.log(++m);
// });
//
// myEmitter.emit('event');
// // Prints: 1
// myEmitter.emit('event');
// // Prints: 2

myEmitter.once('event', () => {
console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Ignored

//Error events
//const myEmitter = new MyEmitter();
//myEmitter.emit('error', new Error('whoops!'));
