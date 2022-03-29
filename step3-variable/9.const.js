// let 재할당 가능
let a = 1;
a = 2;

// const 재할당 불가
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'bye'; //👈 에러 발생

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);

apple.name = '사과';
console.log(apple.name);
apple.display = '🍏';
console.log(apple.display);
