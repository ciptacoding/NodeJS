/**
 Meskipun format atau sintaksis dari json string sudah sesuai, tetap ada kemungkinan data di dalamnya tidak lengkap. Saat ini kita masih menggunakan SyntaxError untuk menandai eror akibat data yang tidak lengkap, padahal secara sintaksis tidak ada masalah dari variabel json. Tentunya akan lebih baik jika kita punya Error yang lebih spesifik, bukan?

Untuk itu kita bisa membuat kelas Error kita sendiri dengan nama dan pesan yang lebih sesuai. Kelas ini merupakan turunan dari kelas Error yang sudah ada. Sebagai contoh, untuk mengecek validasi data dari json, kita bisa membuat kelas Error seperti ini:
 */

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

let json = '{"age": 20}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new ValidationError('name is required!');
  }
  if (!user.age) {
    throw new ValidationError('age is required!');
  }

  console.log(user.name);
  console.log(user.age);

} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Syntax Error : ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid Data Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}