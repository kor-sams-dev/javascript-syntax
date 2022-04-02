// Object literal { key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: 'apple',
  'hello-bye': '👍',
  0: 1,
  ['hello-by1']: '🙆‍♂️', // helloBy1 -> 로 좋은 명칭을 정하면 좋다.
};

// 속성, 데이터에 접근하기 위해서는
// key.name
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-by1']); // 대괄호 표기법 bracket notation
console.log(apple['name']);

// 속성추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성삭제
delete apple.emoji;
console.log(apple);
