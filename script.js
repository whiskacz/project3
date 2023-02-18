const numbers = /[0-9]/i;
const smallLetters = /[a-z]/i;
const bigLetters = /[A-Z]/i;
const special = /[!@#$%^&*]/i;
const passLong = 10

const inputMessage = document.querySelector("#password")

const passcheck = () => {
    console.log(inputMessage.value)
console.log(inputMessage.value.length)
    if(inputMessage.value.length >= passLong && inputMessage.value.match(numbers) && inputMessage.value.match(smallLetters) && inputMessage.value.match(bigLetters)  && inputMessage.value.match(special))
    {console.log("haslo jest ok")
} else {
    console.log("twoje haslo jest za slabe")
}
}
inputMessage.addEventListener("keyup", passcheck)