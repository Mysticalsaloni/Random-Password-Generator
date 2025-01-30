let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

let lowercasechars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allSymbols = "!@#$%&*^+''";

// Function to generate password
function generatePassword() {
    let generatePassword = "";
    let allChars = "";
    allChars += lowercase.checked ? lowercasechars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allnumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars === "" || allChars.length === 0) {
        return generatePassword;
    }

    for (let i = 0; i < inputSlider.value; i++) {
        generatePassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return generatePassword;
}

copyIcon.addEventListener("click", () => {
    if (passBox.value !== "" && passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerText = "content_copy";
            copyIcon.title = "";
        }, 3000);
    }
});
