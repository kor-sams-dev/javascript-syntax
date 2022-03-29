// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음

const print = (a) => {
  console.log(a);
};

const twicePrint = (a) => {
  console.log(a * 2);
};

const iterate = (max, action) => {
  for (let i = 0; i < max; i++) {
    action(i);
  }
};

iterate(5, print);
iterate(5, twicePrint);

// 추가
iterate(2, (num) => console.log(num));

setTimeout(() => {
  console.log('3초뒤 이 함수가 실행될거에요');
}, 3000);
