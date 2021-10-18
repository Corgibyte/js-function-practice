/* function toFahrenheit(celsiusTemperature) {
  return celsiusTemperature * 9/5 + 32;
}

const celsiusTemp = parseFloat(prompt("Celsius temp:"));
alert(toFahrenheit(celsiusTemp)); */

function encode(original) {
  return original.charAt(0).toUpperCase() + original.charAt(original.length - 1).toUpperCase();
}

function encodeFlip(original) {
  return original.charAt(1) + original.charAt(0);
}

function encodeAndFlip(original) {
  return original + encodeFlip(encode(original));
}

function counter(original) {
  return original.charAt(parseInt(original.length/2)) + encodeAndFlip(original);
}

function reverse(original){
  return original.split("").reverse().join("");
}

const sentence = prompt("Enter a sentence:");

$(document).ready(function() {
  $("div.original").click(function() {
    alert(sentence);
  });

  $("div.encoded").click(function() {
    alert(reverse(counter(sentence)));
  });
});

