// console.log("Merhaba dünya");
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(4,5));

// const { substract, divide } = require("./utils/index.js")

// const utils = require("./utils");


// const fs=require("fs");
// fs.writeFileSync("test.txt","BU BİR TEST DOSYASIDIR","UTF-8");



// const helloWorld=require("./utils/index.js")
// console.log(helloWorld);


// const sum=require("./utils/index.js")
// console.log(sum(20,89));


// const utils=require("./utils/index.js")
// console.log(utils.substract(10,25))

// Birden fazla fonksiyonu index sayfasından çağırmak istersek aşağıdaki gibi yapabiliriz.
// const {sum,subtract}=require("./utils/index.js");
// console.log(sum(10,25));
// console.log(subtract(68,95));


/* 
function sum(a,b){
return `${a+b}Elma`
}

const {sum:sumTotal,subtract:subtractTotal}=require("./utils/index.js");
console.log(sum(10,25));
console.log(subtract(68,95));

// bir sayfa içerisinde iki adet aynı isimde fonksiyon tanımlanamaz buyüzden kodlar çalışmaz bizde ikinci fonksiyondaki isimleri değiştiriyoruz.
// sum :sumTotal ismine çevirmiş olduk.
*/


// const {sum,subtract,divide}=require("./utils/index.js");
// console.log(divide(9,3));



// Process
// const Student=require("./utils/index.js");
// const Student=new Student("Ayse");

// Student.logName()

/**
 Process : Çalışmakta olan bir programı ifade eder. 
 Program bilgisayar tarafından yapılmasını istediğimiz talimatların hafızadaki gösterimi olarak düşünülebilir. Process olmadan herhangi bir işlem gerçekleştiremezler.
 processler tek bir işlemci (CPU) üzerinde birden fazla işlemciye sahipmiş gibi işlem yapabilmemize olanak sağlarlar.

 */


// process.exit();//Aynı anda çalışan işlemi bir çıkış koduyla sonlandırma işlemidir. kendinden sonraki kodları göstermez.

process.on('exit',function(){
    console.log('İŞLEM BİTTİ,ÇIKIŞ YAPIYORUM');
}).on('uncaughtException',function(error){
    console.log("Hata yakaladım");
    console.log(error.stack)
})
// hata yaptığında ne yapılması gerektiğini
// process.on('uncaughtException',function(error){
//     console.log("Hata yakaladım");
//     console.log(error.stack)
// })


// console.log("İŞLEM SONUCU"); 
// console.log(process.pid);// pid sürekli değişir.
// console.log(process.version);//node.js'in bu projede çalışma versiyonunu gösterir.
// console.log(process.platform);//kaç bit windows sürümüyle çalıştığını gösterir. sonucu:win32 yani 32 bit windows sürümü çalışıyor.
// console.log(process.title);//komut istemi cmd sayfasının nerde çalıştığı dosyayı gösterir.

// console.log(process.cwd());//Hangi dosyada çalıştığını gösterir.

// değişip değişmediğini anlama yolu
console.log(process.cwd());
process.chdir("../");//ch'dir: klaör değiştirmek için kullanılır. 
console.log(process.cwd());






    
