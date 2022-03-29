// 문자열 타입
let string = '안녕하세요';
string = `이렇게 백틱으로도 가능.`;
console.log(string);

// 특수문자 출력하는 법!
string = "'안녕!!'";
console.log(string);

string = '안녕~\n한샘아!!\t\t내 이름은 \\\u09AC'; //이스케이프 표현
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = '한샘';
let greetings = '안녕!!!, ' + id + '🙆‍♂️\n즐거운 하루 보내요!';
console.log(greetings);

greetings = `이렇게도!!! ${id}이는 
가능합니다`;
console.log(greetings);
