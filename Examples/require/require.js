//if we need to require something usually node 
//Follows these steps

//Resolving	--> To Find absolute path of the file module
//Loading 	-->	To determine the content of the file at resolved path
//Wrapping	-->	To make private scope and makes require to local
//Evaluating-->	Vm does with the code
//Caching	-->	if require again then no need to follow above steps
console.log(module);
/*Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/home/chandru/Documents/gitHub/Node_6.10/Examples/require/require.js',
  loaded: false,
  children: [],
  paths: 
   [ '/home/chandru/Documents/gitHub/Node_6.10/Examples/require/node_modules',
     '/home/chandru/Documents/gitHub/Node_6.10/Examples/node_modules',
     '/home/chandru/Documents/gitHub/Node_6.10/node_modules',
     '/home/chandru/Documents/gitHub/node_modules',
     '/home/chandru/Documents/node_modules',
     '/home/chandru/node_modules',
     '/home/node_modules',
     '/node_modules' ] }*/

