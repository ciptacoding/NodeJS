const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve('Kopi didapatkan');
      } else {
        reject('Biji kopi habis');
      }
    }, 1000);
  })
}

// function makeCoffee() {
//   getCoffee().then((coffee) => {
//     console.log(coffee)
//   })
// }

// Async-await memungkinkan kita menuliskan proses asynchronous layaknya proses synchronous. namun await hanya mengembalikan nilai jika promise berhasil
async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);

  } catch (rejectedReason) {
    console.log(rejectedReason);
  }

}

makeCoffee();