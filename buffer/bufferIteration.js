const buf = Buffer.from([1, 2, 3,4,5,6,7,8]);

// Prints:
//   1
//   2
//   3 ...etc.
for (const b of buf) {
  console.log(b);
}
//buf.entries();
for (const [key,value ]of buf.entries()) {
  console.log(`key ${key}`);
  console.log(`value ${value}`);
}
//buf.keys()
console.log(buf.keys());
//buf.values()
console.log(buf.values());


//for(const index in buf){
//  console.log(buf[index]);//Prints data along with so many unnessesary values
//}
