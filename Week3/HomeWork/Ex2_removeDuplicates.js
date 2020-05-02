function removeDuplicates(myArray, callBack) {
  let removes = myArray.filter(function (item, par) {
    //validates whether the first occurrence of current item in array
    // equals the current position of the item (only return those items)
    return myArray.indexOf(item) == par;
  });

  //wrap your result and pass to callBack function
  callBack(removes);
}

function callBack(result) {
  console.log(result);
}
removeDuplicates(
  ["a", "b", "b", "c", "d", "a", "e", "f", "f", "c", "b"],
  callBack
);
