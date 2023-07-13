function checkLogin(login) {
    var loginValidationRegex = /^[a-zA-Z][a-zA-Z0-9]*(\.[a-zA-Z0-9]+)?$/;
    return loginValidationRegex.test(login);
  }
  
  console.log(checkLogin('ee1.1ret3')); // true
  console.log(checkLogin('ee1*1ret3')); // false
  
  