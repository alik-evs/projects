function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
}

console.log(upperCase('regexp')); 
console.log(upperCase('RegExp')); 

//let testString = "Test";
//console.log(upperCase(testString));
