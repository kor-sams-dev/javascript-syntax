// while(조건) { }
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

// let isActive = true;
let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직살아있다!!!!');
  if (i === 100) {
    break;
    continue;
  }
  i++;
}

do {
  console.log('아직 살아있다!!!!!!! do while!');
} while (isActive);
