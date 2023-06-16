const applyCallbackToEachElement = function (arr, callback) {
    const result = [];
  

        //я не знаю як це зробити через forEach 
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      const transformedElement = callback(element);
      result.push(transformedElement);
    }
 
    return result;
  };
  
  const arr = [1, 2, 3, 4, 5];
  
  const squareCallback = function (num) {
    return num * num;
  };
  
  const result = applyCallbackToEachElement(arr, squareCallback);
  
  console.log(result); // [1, 4, 9, 16, 25]
  