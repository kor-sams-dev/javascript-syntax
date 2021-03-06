function fetchEgg(chicken) {
  // return new Promise((resolve, reject)...)
  return Promise.resolve(`${chicken} => π₯`);
}

fetchEgg('π') //
  .then((egg) => console.log(egg));

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  return Promise.reject(new Error('μΉν¨μ κ°μ Έμ€λλ° μ€ν¨ν¨'));
  // return Promise.resolve(`πͺ΄ => π`);
}

getChicken()
  .catch((error) => {
    console.log(error.name);
    return 'π';
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));

// μ μμ€μ λμΌ
getChicken()
  .catch(() => 'π')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
