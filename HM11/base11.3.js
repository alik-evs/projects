const firstPrompt = new Promise(function(resolve, reject) {
    const number = prompt("Enter a number:");
  
    if (number === null) {
      reject("Rejected");
    } else if (number === "" || isNaN(number)) {
      reject("Error! You entered incorrect number.");
    } else {
      resolve(Number(number));
    }
  });
  
  firstPrompt
    .catch(function(error) {
      console.log(error);
      return new Promise(function(resolve, reject) {
        let number;
        while (true) {
          number = prompt("Enter a number:");
          if (number === null) {
            reject("Rejected");
            break;
          } else if (number === "" || isNaN(number)) {
            console.log("Error! You entered incorrect number.");
          } else {
            resolve(Number(number));
            break;
          }
        }
      });
    })
    .then(function(result) {
      console.log("Your entered number is:", result);
    });
  