let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수 ( 0b 로 시작 )
let octal = 0o173; // 8진수 ( 0o 로 시작 )
let hex = 0x7b; // 16진수 ( 0x 로 시작 )

console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN (Not a Number)

let bigInt = 12732835728934592837489576239841982764589172635897123840n; // 엄청 큰 숫자 ( n으로 끝 )
console.log(bigInt);
