import Jimp from "jimp";
// npm install jimp  =cmd sayfasında yaz indir.

// JİMP : Resim işleme kütüphanelerinden.Hem içerden hemde siteden resmi okuyabilir.

/*
Jimp.read("https://i.pinimg.com/564x/f9/65/5a/f9655a045a4285693c9a2b48e2980c75.jpg")
    .then((image) => {
        image.cover(512, 900)  //çerçeve boyutları genişlik yükseklik
            .quality(100) //çözünürlük ayarı100üzerinden değer verilir
            .greyscale() //resmin rengini gri yaptı
            .write("./test.jpg") //oluşturacağımız resmin ismini dosyaya ekliyoruz.
    }).catch(err => {
        console.log(err);
    })
*/


// console.log("😂😂🤣"); //windows + . işaretine tıkladığında etiketlerde geliyor.


Jimp.read("https://i.pinimg.com/564x/f9/65/5a/f9655a045a4285693c9a2b48e2980c75.jpg")
    .then((image) => {
        image.cover(512, 900)  //çerçeve boyutları genişlik yükseklik
            .quality(100) //çözünürlük ayarı100üzerinden değer verilir
            .greyscale() //resmin rengini gri yaptı
            .opacity(0.25)
            .write("./test.webp") //oluşturacağımız resmin ismini dosyaya ekliyoruz.
    }).catch(err => {
        console.log(err);
    })














































