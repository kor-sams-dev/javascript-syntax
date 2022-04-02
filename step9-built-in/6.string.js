const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(typeof textObj);
console.log(typeof text);

// 문자열 길이 반환
console.log(text.length);

// 문장열 위치 지정 반환
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

// 문자열 위치 반환 처음부터, 마지막부터
console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

// 문자열 포함 반환
console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

// 처음, 마지막 문자열 확인
console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

// 대문자, 소문자 변환
console.log(text.toUpperCase());
console.log(text.toLocaleLowerCase());

// 문자열 잘라오기
console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

// 공백 제거
const space = '        space        ';
console.log(space.trim());

// 문자열 잘라 배열 반환
const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(',', 2));
