//String decoder is used to decode binary stream data into different standard
//like UTF8 etc..

const { StringDecoder }=require('string_decoder');
const decoder= new StringDecoder('utf8');

process.stdin.on('readable',()=>{
	const chunk=process.stdin.read();
	if(chunk){
		const buffer=Buffer.from([chunk]);
		console.log('With .toString()',buffer.toString());
		console.log('With StringDecoder',decoder.write(buffer));
	}
});