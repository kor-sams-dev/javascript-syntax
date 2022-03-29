// 반복문 Loop Statement
// for(변수선언문; 조건문; 증감식) { }
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 도리 때까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프
// for (;;) {
//   console.log('🙀');
// }

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log('i가 드디어 10이 되었다!');
    continue; // 이 후 과정 무시 후 다음 루프 시작
    break; // for 문 종료
  }
  console.log(i);
}
