let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/* this codes returns an alert which displayed 12 on our page;
variable a is declared and it gets a number as a value. 
Then variable "x" declared and the return of the self executing function is assigned as a a value. This is the enclosed function with its closure


*/
console.log("hello");
