// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
const sum = (a, b) => {
  return a + b;
};
// add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object = new Function();
// IIFE (Immedicately-Invoked Function Expressions)
(function run() {
  console.log('🤔');
})();
