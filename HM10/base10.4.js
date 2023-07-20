function mapBuilder(keysArray, valuesArray) {
    if (keysArray.length !== valuesArray.length) {
      throw new Error("Length of keysArray and valuesArray should be equal.");
    }
  
    const map = keysArray.reduce((result, key, index) => {
      result.set(key, valuesArray[index]);
      return result;
    }, new Map());
  
    return map;
  }
  
  
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);
  
  console.log(map.size); // 4
  console.log(map.get(2)); // span
  