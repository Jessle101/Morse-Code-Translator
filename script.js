let hasSwitched = false;
const transSwitch = document.querySelector("#switch");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
let translation = "Translation";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

translate = {
  englishToMorse: "true",
  input: "",
  output: "",
};

let e2m = translate.englishToMorse;
let inputArr = 0;
let outputArr = 0;

transSwitch.addEventListener("click", function () {
  if (hasSwitched === false) {
    text1.innerHTML = "Morse Code";
    text2.innerHTML = "English";
    hasSwitched = true;
  } else if (hasSwitched === true) {
    text1.innerHTML = "English";
    text2.innerHTML = "Morse Code";
    hasSwitched = false;
  }
});

input.addEventListener("input", function () {
  translate.input = input.value;
  output.innerHTML = translate.input;
  console.log(translate);

  inputArr = translate.input.split("");
  console.log(inputArr);

  // if translating english to morse
  if (e2m === "true") {
    // if translating morse to english
  } else {
  }
});

// function to translate
const translateIt = () => {
  if (e2m === true) {
    inputArr.filter();
  } else {
  }
};
