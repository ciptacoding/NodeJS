const stock = {
  sugar: 1000,
  tea: 350
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.sugar >= 15 && stock.tea >= 5) {
      resolve('Stok cukup, teh berhasil dibuat');
    } else {
      reject('Stock tidak cukup');
    }
  });
};

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
};

checkStock()
  .then(handleSuccess)
  .catch(handleFailure);
  //Method .catch() mirip seperti .then(). Namun, method ini hanya menerima satu parameter function yang digunakan untuk rejected handler. Method catch() ini akan terpanggil ketika objek promise memiliki kondisi onRejected. Berikut contoh penggunaan method .catch():