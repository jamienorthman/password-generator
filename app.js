import { characters } from "/data.js";

//Get input range value and display character length:
const passwordLength = document.getElementById("slider");
const value = document.getElementById("value")
value.textContent = passwordLength.value
passwordLength.addEventListener("input", (e) => {
  value.textContent = e.target.value
})

//Add a copy on click event:
/*const clipboard = document.getElementById("clipboard")*/
document.addEventListener('click', function(event) {
  if (event.target.tagName === 'SPAN') {
    let copyText = event.target.textContent;
    navigator.clipboard.writeText(copyText);
  }
});

// Getting the HTML elements (divs) where the passwords will
// appear.
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");

//const checked = document.getElementById("checkbox").checked

// Getting the button element and adding a click event listener,
// which passes the final function displayPasswords:
const button = document.getElementById("generate-button");
button.addEventListener("click", displayPasswords);

// Generates a random character from the array:
const getRandomCharacter = () => { 
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
};

// A for loop that goes through only the length of the password
// and runs the getRandomCharacter function to generate a
// random password:
const generateRandomPassword = () => {
  let randomPassword = "";
    for (let i = 0; i < passwordLength.value; i++) { 
        randomPassword += getRandomCharacter();
    }
    return randomPassword;
};

// A function to display the passwords in their divs:
function displayPasswords() {
  const generatedPasswordOne = generateRandomPassword();
  const generatedPasswordTwo = generateRandomPassword();
  password1El.textContent = generatedPasswordOne;
  password2El.textContent = generatedPasswordTwo;
}


