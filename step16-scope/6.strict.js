// 엄격 모드 strict mode
// 리엑트와 같은 프레임워크 사용 시 기본적으로 엄격 모드임
'use strict';

// var x = 1;
// delete x;

function add(x) {
  var a = 2;
  // b = a + x; // Error!
  var b = a + x;
  console.log(this); // <- undefinded
}
add(1);

const array = [1, 23];
// for(num of array){ // <- Error!
for (const num of array) {
  console.log(num);
}
