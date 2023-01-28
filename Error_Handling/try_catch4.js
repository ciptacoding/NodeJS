let test = '{ "age": 20 }';

try {
  let user = JSON.parse(test)
  console.log(user.name); //undefined
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

/*
Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan. Namun, tidak adanya properti name pada json sebenarnya sama saja dengan eror karena akan berdampak pada jalannya program kita.

Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan eror kita sendiri:
*/

let json = '{"age": 21}';

try {
  let student = JSON.parse(json);

  if (!student.name) {
    throw new SyntaxError("'name' is required!");
  }
  console.log(student.name);
  console.log(student.age);

} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

/**
 Ketika properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError. Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.
 */