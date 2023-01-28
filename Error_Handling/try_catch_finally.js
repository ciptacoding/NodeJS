//Selain try dan catch, ada satu blok lagi yang ada dalam mekanisme error handling pada JavaScript, yaitu finally. Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.

try {
  console.log('blok try 1');
  console.log('blok try 2');
  console.log('blok try 3');
} catch (error) {
  console.log('blok catch diabaikan karena tidak ada error');
} finally {
  console.log('Akan tetap dieksekusi');
}