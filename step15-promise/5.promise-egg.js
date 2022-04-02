function fetchEgg(chicken) {
  // return new Promise((resolve, reject)...)
  return Promise.resolve(`${chicken} => 🥚`);
}

fetchEgg('🐔') //
  .then((egg) => console.log(egg));

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가져오는데 실패함'));
  // return Promise.resolve(`🪴 => 🐔`);
}

getChicken()
  .catch((error) => {
    console.log(error.name);
    return '🐔';
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));

// 위 소스와 동일
getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
