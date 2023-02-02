"use strict";

/* **************
Check Valid Command
Apart from being smart, the Chatbot is also a loyal assistant.

To ask something to the chatbot, the user must say the word “Chatbot” in the first position of the command.

It doesn't matter if the keyword is in UPPERCASE or lowercase. The important aspect here is the position of the word.

Implement the function isValidCommand() that helps the Chatbot recognize when the user is giving a command.

isValidCommand("Chatbot, play a song from the 80's.";
// => True
isValidCommand("Hey Chatbot, where is the closest pharmacy?";
// => False
isValidCommand("CHATBOT, do you have a solution for this challenge?";
// => True
******************* */

//texto empieza con chatbot tanto en mayusculas como en minusculas, ...
const isValidCommand = (text) => {
    const pattern = /^chatbot/gim;

    return pattern.test(text);
}

let result = isValidCommand("CHATBOT, do you have a solution for this challenge?");

console.log(result);

//Comprueba nº telefono The expected format is: (+##) ###-###-###
const checkPhoneNumber = (phoneNumer) => /^\(\+[0-9]{2}\)\s[0-9]{3}-[0-9]{3}-[0-9]{3}/.test(phoneNumer);
console.log("checkPhoneNumber('(+34) 659-771-594'): ", checkPhoneNumber('(+34) 659-771-594'));
console.log("checkPhoneNumber('659-771-594') ",checkPhoneNumber('659-771-594'));


//split() method
const str = 'hello,user.how are.you';
const resultado = str.split(/[,.\s]/);

console.log("resultado split texto", resultado);
// => ['hello', 'user', 'how', 'are', 'you']


//includes() metodo array y texto 
console.log("['agua', 'pan', 'menu'].includes('menu')", ['agua', 'pan', 'menu'].includes('menu'));
console.log("chatbot hola".includes('chat'));