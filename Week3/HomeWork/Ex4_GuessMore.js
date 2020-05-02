const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
first console.log gives 9 as an output.

first variable x declared and it gets 9 as a value. Then variable (f1) declared and it gets a function.
 Function is invoked with (x). X is global and the value of x
is 9.

y is an object and passed in f2. second console. log gives 10 (x=10)



*/
