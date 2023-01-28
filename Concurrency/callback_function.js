

const orderCoffee = (callback) => {
  let coffee = null;
  console.log('sedang membuat coffee, silahkan tunggu');
  setTimeout(() => {
    coffee = 'coffee sudah jadi';
    callback(coffee);
  }, 4000);
}

orderCoffee(coffee => {
  console.log(coffee);
});