const buf = Buffer.alloc(1234);

// Prints: 1234
console.log(buf.length);

buf.write('some string', 0, 'ascii');

// Prints: 1234
console.log(buf.length);
