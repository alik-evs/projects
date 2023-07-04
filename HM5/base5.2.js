function propsCount(currentObject) {
    let count = 0;
    for (let key in currentObject) {
      if (currentObject.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
  
  let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
  };
  
  console.log(propsCount(mentor));