const stock = {
  coffeeBeans: 500,
  water: 1000
}

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 25 && stock.water >= 250) {
      resolve('Stok cukup, coffee berhasil dibuat');
    } else {
      reject('Stock tidak cukup untuk membuat coffee');
    }
  });
}

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
}

checkStock().then(handleSuccess, handleFailure);

// .then() sendiri adalah sebuah higher - order function yang membutuhkan dua parameter.Keduanya adalah callback function yang juga dikenal sebagai handler.Handler pertama adalah fungsi yang akan dijalankan ketika Promise berstatus resolve.Sedangkan handler kedua adalah fungsi yang akan dijalankan ketika Promise berstatus reject.