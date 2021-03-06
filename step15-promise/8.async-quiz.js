function fetchEgg(chicken) {
  // return new Promise((resolve, reject)...)
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  return Promise.reject(new Error('μΉν¨μ κ°μ Έμ€λλ° μ€ν¨ν¨'));
  // return Promise.resolve(`πͺ΄ => π`);
}

async function getFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = 'π';
  }
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);
  return friedEgg;
}

getFriedEgg() //
  .then(console.log);
