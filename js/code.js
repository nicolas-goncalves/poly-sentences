var sentences = [
    ["What's your name?", "Quel est ton nom ?", "Come ti chiami?", "Qual é o seu nome?", "¿Cual es tu nombre?"],
    ["I am handsome", "Je suis beau", "Sono bello", "Eu sou bonito", "Yo soy guapo"],
    ["It's today", "C'est aujourd'hui", "È oggi", "É hoje", "Es hoy"]
];

var first_language = document.getElementById("first_language");
var second_language = document.getElementById("second_language");
var first_sentence = document.getElementById("first_setence");
var second_sentence = document.getElementById("second_setence");

var sentences_number = sentences.length;
var random_language_index;

function randomize() {
    random_language_index =  Math.floor(Math.random() * sentences_number);
    document.getElementById("first_sentence").innerHTML = sentences[random_language_index][first_language.value];
    document.getElementById("second_sentence").innerHTML = sentences[random_language_index][second_language.value];
}