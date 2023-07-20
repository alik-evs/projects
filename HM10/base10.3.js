function mul() {
    let result = 1;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        result *= arguments[i];
      }
    }
    return result;
  }
  
  console.log(mul(1, "str", 2, 3, true)); // 6
  console.log(mul(null, "str", false, true)); // 0
  