function checkEmail(email) {
    var emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidationRegex.test(email);
}

console.log(checkEmail("Qmail2@gmail.com")); // tr
console.log(checkEmail("Qmail2@gmailcom")); // f