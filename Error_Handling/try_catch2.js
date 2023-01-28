let json = '{ "name": "cipta", "age": 20 }'

try {
  let user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);

} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

//Pada kode di atas, fungsi JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object. Skenario seperti di atas akan banyak kita temui ketika melakukan request ke API.

//Jalankan kode di atas pada text editor Anda.Seharusnya aplikasi berjalan lancar tanpa menimbulkan eror.