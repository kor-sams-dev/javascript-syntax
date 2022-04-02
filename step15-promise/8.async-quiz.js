function fetchEgg(chicken) {
  // return new Promise((resolve, reject)...)
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가져오는데 실패함'));
  // return Promise.resolve(`🪴 => 🐔`);
}

async function getFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);
  return friedEgg;
}

getFriedEgg() //
  .then(console.log);
