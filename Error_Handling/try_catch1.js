//Taruh kode yang berpeluang menimbulkan eror di dalam blok try. Apabila terjadi eror di dalam blok kode try, maka ia akan ditangkap dan ditangani oleh blok kode catch. Sementara, jika tidak terjadi eror pada kode, maka blok catch akan diabaikan.

try {
  console.log('blok try 1')
  errorCode;
  console.log('blok try 3')
} catch (error) {
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}

//Sekarang perhatikan blok catch. Di sana catch memiliki satu parameter bernama error (nama variabel bisa diubah). Variabel error tersebut merupakan sebuah object yang menyimpan detail informasi dari error yang terjadi.

// Object error memiliki beberapa properti utama di dalamnya, yaitu:

// name: Nama error yang terjadi.
// message : Pesan tentang detail error.
// stack : Informasi urutan kejadian yang menyebabkan error.Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.