var welcome = function (name) {
  console.log(`Welcome ${name}. Have a great day!`);
};
welcome("Annaliza");
welcome("John");
welcome("Mary");

var addTogether = function (num1, num2) {
  console.log(num1 + num2);
};
addTogether(1, 2);
addTogether(36, -2.88);
addTogether(100, 56.5);

var addTogether = function (num1, num2) {
  return num1 + num2;
};
alert(addTogether(36, 24));
console.log(addTogether(13, 72));
var lunchForTwo = addTogether(24.99, 18.65);
console.log(lunchForTwo);
