let hasSwitched = false;
const transSwitch = document.querySelector("#switch");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
let translation = "Translation";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

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
  let translation = input.value;
  console.log(translation);
  output.innerHTML = translation;
});

translate = {
  englishToMorse: "true",
  input: "egg",
  output: "",
};

let e2m = translate.englishToMorse;
if (e2m === "true") {
  e2m = true;
} else {
  e2m = false;
}
console.log(e2m);

let translateInput = translate.input.split("");
console.log(translateInput);

let translatedOutput = translateInput;
console.log(translatedOutput);

// function to translate
const translateIt = () => {
  if (e2m === true) {
  } else {
  }
};
