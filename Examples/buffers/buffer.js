const stringdata='Touche';
const buffer =Buffer.from('Touche');


console.log(stringdata,stringdata.length);//Touche 6
console.log(buffer,buffer.length);//<Buffer 54 6f 75 63 68 65> 6

//Buffers are usefull when we read image from compressed file or TCP Stream

