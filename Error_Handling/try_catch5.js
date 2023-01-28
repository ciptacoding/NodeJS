let json = '{ "name": "Yoda", "age": 20 }';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode; //undefined
  console.log(user.name); // Yoda
  console.log(user.age);  // 20

} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

/* output
JSON Error: errorCode is not defined
Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?

Jawabannya adalah dengan if statement.
*/
let test = '{ "name": "Yoda", "age": 20 }';

try {
  let human = JSON.parse(test);

  if (!human.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode; //undefined
  console.log(human.name); // Yoda
  console.log(human.age);  // 20

} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}

/**
 Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
 */