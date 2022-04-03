{
  const x = 1;
  {
    const y = 2;
    console.log(x); // -> 1
  }
  console.log(x); // -> 1
  // console.log(y); // -> error
}

const text = 'global'; // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = 'inside block!'; // 지역 변수(로컬변수), 지역 스코프(로컬 스코프)
  {
    console.log(text);
  }
}
