const passwordbox = document.getElementById("Password");

function generatePassword() {
    console.log("Generating password...");
    let password = '';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allchar = upperCase + lowerCase + numbers + symbols;
    const length = 12; // Example length, adjust as needed

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    console.log("Generated password:", password);
    passwordbox.value = password;
}

function copyPassword() {
    console.log("Copying password...");
    passwordbox.select();
    document.execCommand("copy");
}