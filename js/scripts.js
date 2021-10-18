/* function toFahrenheit(celsiusTemperature) {
  return celsiusTemperature * 9/5 + 32;
}

const celsiusTemp = parseFloat(prompt("Celsius temp:"));
alert(toFahrenheit(celsiusTemp)); */

function encode(original) {
  return original.charAt(0).toUpperCase() + original.charAt(original.length - 1).toUpperCase();
}

const sentence = prompt("Enter a sentence:");
alert(encode(sentence));
