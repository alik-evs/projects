function validateCreditCardNumber(cardNumber) {
    var cardNumberValidationRegex = /^(\d{4}-){3}\d{4}$/;
    if (!cardNumberValidationRegex.test(cardNumber)) {
      return false;
    }
  
    var strippedNumber = cardNumber.replace(/-/g, '');
    if (strippedNumber.length !== 16) {
      return false;
    }
  
    return true;
  }
  
  console.log(validateCreditCardNumber("999999999999")); //f
  console.log(validateCreditCardNumber("1234-5678-9012-3456")); //t
  console.log(validateCreditCardNumber("fff-1234-1234-oooo"));  //f
  console.log(validateCreditCardNumber("1234-1234-1233-12"));  //f
  