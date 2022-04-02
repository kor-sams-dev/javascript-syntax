// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
  console.log(text.charAt(i));
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
const idsArr = ids.split(', ');
console.log(idsArr);

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
setInterval(() => {
  const now = new Date();
  let dayString;
  switch (now.getDay()) {
    case 0:
      dayString = '일요일';
      break;
    case 1:
      dayString = '월요일';
      break;
    case 2:
      dayString = '화요일';
      break;
    case 3:
      dayString = '수요일';
      break;
    case 4:
      dayString = '목요일';
      break;
    case 5:
      dayString = '금요일';
      break;
    case 6:
      dayString = '토요일';
      break;
  }

  console.log(dayString, now.toLocaleString('kr-KO'));
}, 1000);
