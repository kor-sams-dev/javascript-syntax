// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const fruits1 = ['🍌', '🍓', '🍇', '🍓'];

function changeFruits(fruits, findFruit, changeFruit) {
  let result = [];
  for (i = 0; i < fruits.length; i++) {
    if (fruits[i] === findFruit) {
      result.push(changeFruit);
    } else {
      result.push(fruits[i]);
    }
  }
  return result;
}
const fruits2 = changeFruits(fruits1, '🍓', '🥝');
console.log(fruits1, fruits2);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function countFruits(fruits, findFruit) {
  let cnt = 0;
  for (i = 0; i < fruits.length; i++) {
    if (fruits[i] === findFruit) {
      cnt++;
    }
  }
  return cnt;
}
console.log(countFruits(fruits2, '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const fruits3 = ['🍌', '🥝', '🍇'];
const fruits4 = ['🍌', '🍓', '🍇', '🍓'];

function compareFruits(targetFruits, compareFruits) {
  let result = [];
  for (let i = 0; i < targetFruits.length; i++) {
    for (let k = 0; k < compareFruits.length; k++) {
      if (targetFruits[i] === compareFruits[k]) {
        result.push(targetFruits[i]);
        break;
      }
    }
  }
  return result;
}
const fruits5 = compareFruits(fruits3, fruits4);
console.log(fruits5);
