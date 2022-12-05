let hasSwitched = false;
const transSwitch = document.querySelector("#switch");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
let translation = "Translation";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

// A to Z in Morse Code
const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// functions to translate
const englishToMorse = (engStr, obj) => {
  const engStr2 = engStr.toUpperCase();
  const lettersArr = engStr2.split("");
  // takes an anonymous function or function definition
  const morseArr = lettersArr.map((engStr) => {
    return obj[engStr];
  });
  const morseStr = morseArr.join(" ");
  console.log(morseStr);
  return morseStr;
};

// instead of object value, add object key & add a specified value (reverse it)
const morseToEnglish = () => {};

translate = {
  englishToMorse: true,
  input: "",
  output: "",
};

const e2m = translate.englishToMorse;
let inputArr = 0;
let outputArr = 0;

input.addEventListener("input", function () {
  translate.input = input.value;

  // if translating english to morse
  if (e2m === true) {
    const something = englishToMorse(translate.input, morseCode);
    output.innerHTML = something;
    console.log(something);
    // if translating morse to english
  } else {
    // morseToEnglish(translate.input, morseCode);
  }
});

transSwitch.addEventListener("click", function () {
  if (hasSwitched === false) {
    text1.innerHTML = "Morse Code";
    text2.innerHTML = "English";
    input.value = output.innerHTML;
    hasSwitched = true;
    translate.englishToMorse = false;
  } else if (hasSwitched === true) {
    text1.innerHTML = "English";
    text2.innerHTML = "Morse Code";
    input.value = output.innerHTML;
    hasSwitched = false;
    translate.englishToMorse = true;
  }
});

englishToMorse("hello", morseCode);

// file for each m2e, etc functions
// JS tests, i.e.
