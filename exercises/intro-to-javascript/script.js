// alert("Hello World!")

// function sayHello(){
//  console.log('Hi!');
// }

// sayHello()

// const fname = 'Kaeli'
// const greeting = `Hello, ${fname}`;

// let age = 25
// let height = 5 

// console.log(age);
// console.log(height);


// let noun = 'cat'
// let adj = 'soft'
// let verb = 'sleep'

// let sentence = `Every time a ${adj} ${noun} ${verb}s, the light turns ${adj}`

// console.log(sentence)

let nouns = ['sheep', 'fire', 'glass'];
let adjs = ['soft', 'apathetic', 'painful'];
let verbs = ['sleeps', 'breathes', 'cries'];

let noun = nouns[Math.floor(Math.random()*nouns.length)]
let verb = verbs[Math.floor(Math.random()*verbs.length)]
let adj = adjs[Math.floor(Math.random()*adjs.length)]

let sentence = `Every time a ${adj} ${noun} ${verb}, the light turns ${adj}`

console.log(sentence)