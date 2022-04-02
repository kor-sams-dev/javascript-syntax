// Iterable 하다는건! 순회가 가능하다는 것!
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는 것은 순회 가능한 객체다! 라는것을 의미한다
// 순회가 가능하면 무엇을 할 수 있나?
// 빙빙글 도는 반복문, 연산자들을 사용 할 수 있다.
const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해보기
for (let item of array.values()) {
  console.log(item);
}

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

const obj = { id: 123, name: 'saem' };
// error!!!!!
// for (const item of obj) {
//   console.log(item);
// }
for (const key in obj) {
  console.log(key);
}
