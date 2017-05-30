//The following example shows a simple EventEmitter instance with a single listener. The eventEmitter.on()
//method is used to register listeners, while the eventEmitter.emit() method is used to trigger the event.

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.emit('event');
