function firstPromise() {
  return new Promise((resolve) => {
    resolve('first promise');
  });
}

function secondPromise() {
  return new Promise((resolve) => {
    resolve('second promise');
  });
}

function thirdPromise() {
  return new Promise((resolve) => {
    resolve('third promise');
  });
}

const promises = [firstPromise(), secondPromise(), thirdPromise()];

Promise.all(promises)
  .then(resolvedValue => {
    console.log(resolvedValue);
  });