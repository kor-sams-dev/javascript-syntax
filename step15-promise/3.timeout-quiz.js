// 주어진 seconds(초)rk wlskaus callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (!seconds || seconds < 0) throw new Error('값이 0보다 커야 함');
  if (!callback) throw new Error('콜백함수를 던져야 함');
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log('타이머 GOGO!');
  }, 1);
} catch (error) {
  console.log(error);
}
