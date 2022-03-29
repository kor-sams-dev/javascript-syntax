// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);
a--; // a = a - 1;
console.log(a);

// 주의!!!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
// a-- , --a 도 동일
a = 0;
let b = a++;
console.log('a', a);
console.log('b', b);

a = 0;
b = ++a;
console.log('a', a);
console.log('b', b);

a = 0;
console.log('a++', a++);
console.log('a', a);
