function createBase(firstNumber) {
  return function (A) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return firstNumber + A;
  };
}

const addNine = createBase(9);
addNine(1); //10
addNine(11); //20
addNine(21); //30
