let word = window.prompt("Escribe una palabra");
let word2 = window.prompt("Escribe otra palabra");
let word3 = window.prompt("Escribe una última palabra");

let words = [word, word2, word3];
words[0] = word2;
words[1] = word3;
words[2] = word;
console.log(words);
