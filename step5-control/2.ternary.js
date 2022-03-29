// 삼항 조건 연산자 Ternary Operator
// 조건 ? 참인경우 : 거짓인경우
let fruit = 'orange';

if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('🍊');
}

fruit === 'apple' ? console.log('🍎') : console.log('🍊'); //위 조건문과 동일

let emoji = fruit === 'apple' ? '🍎' : '🍊'; // 변수에 할당 가능
console.log(emoji);
