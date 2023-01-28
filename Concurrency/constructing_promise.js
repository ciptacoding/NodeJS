const executionFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true; // = resolve
  // const isCoffeeMakerReady = false; = reject
  if (isCoffeeMakerReady) {
    resolve('Kopi berhasil dibuat');
  } else {
    reject('Mesin kopi tidak bisa digunakan');
  }
}

// Promise merupakan sebuah objek yang digunakan untuk membuat sebuah komputasi(kode) ditangguhkan dan berjalan secara asynchronous[5].Untuk membuat objek promise, kita gunakan keyword new diikuti dengan constructor dari Promise:
const makeCoffee = () => {
  return new Promise(executionFunction);
}

const coffeePromise = makeCoffee();
console.log(coffeePromise);