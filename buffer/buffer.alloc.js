const buf = Buffer.alloc(5);

// Prints: <Buffer 00 00 00 00 00>
console.log(buf);

const buf1 = Buffer.alloc(5, 'a');

// Prints: <Buffer 61 61 61 61 61>
console.log(buf1);
