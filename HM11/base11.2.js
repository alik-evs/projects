function calcArrProduct(arr) {
    return new Promise(function(resolve, reject) {
      if (arr.every((num) => typeof num === 'number')) {
        const product = arr.reduce((acc, num) => acc * num, 1);
        resolve(product);
      } else {
        reject("Error! Incorrect array!");
      }
    });
}
  
calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"