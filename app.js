// Array of characters to use for passwords:
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// How long the password can be:
let passwordLength = 15
// Getting the HTML elements (divs) where the passwords will 
// appear. 
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
// Getting the button element and adding a click event listener,
// which passes the final function displayPasswords:
let button = document.getElementById("generate-button")
button.addEventListener("click", displayPasswords) 
// Generates a random character from the array:
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}
// A for loop that goes through only the length of the password,
// (15), and runs the getRandomCharacter function to generate a 
// random password:
function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}
// A function to display the passwords in their divs:
function displayPasswords() {
    const generatedPasswordOne = generateRandomPassword()
    const generatedPasswordTwo = generateRandomPassword()
    password1El.textContent = generatedPasswordOne
    password2El.textContent = generatedPasswordTwo
}



  

