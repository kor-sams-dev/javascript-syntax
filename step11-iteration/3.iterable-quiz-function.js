// [Symbol.iterator](): IterableIterator<T>;
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
function createIterable(initVal, maxVal, callback) {
  return {
    [Symbol.iterator]: () => {
      const maxValue = maxVal;
      let num = initVal;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

const multiple = createIterable(0, 20, (num) => num * 2);

for (const item of multiple) {
  console.log(item);
}

const single = createIterable(0, 20, (num) => num);
for (const item of single) {
  console.log(item);
}
