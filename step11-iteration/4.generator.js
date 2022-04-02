// const multiple = {
//   [Symbol.iterator]: () => {
//     const maxValue = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > maxValue };
//       },
//     };
//   },
// };
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// 끝내기
// multiple.return();
// 에러 선언!
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
