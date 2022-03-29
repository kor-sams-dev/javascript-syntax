// 사용예제1
function add(a, b) {
  // const result = a + b;
  // console.log(result);
  // return result;
  console.log('call add function');
  return a + b;
}

const result = add(1, 2);
console.log(result);

// 사용예제2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName1 = '서';
let firstName1 = '한샘';
let fullName1 = fullName(firstName1, lastName1);
console.log(fullName1);

let lastName2 = '김';
let firstName2 = '철수';
let fullName2 = fullName(firstName2, lastName2);
console.log(fullName2);
