import fs from "fs";

// readFile:Dosya okumak
//  const readFileCallBack=(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log("Asenkron olarak okunmuş data:"+data);
//  }
//  fs.readFile("test.txt",readFileCallBack);
// SENKRON
// const readData=fs.readFileSync("test.txt");
// console.log("Senkron olarak okunmuş data:"+readData);


// // WRİTEFİLE=Dosya yazdırmak oluşturmak.
// const writeCallBack=(err)=>{
//     if(err)throw err;
//     console.log("DOSYA YAZILDI");
// } 
// fs.writeFile("test1.txt","yeni text sayfası açarak bu yazıyı içerisine ekledi",writeCallBack);




// const writeCallBack = (err) => {
//     if (err) throw err;
//     console.log("DOSYA YAZILDI");
// }
// const obj = { name: 1, surname: 2, id: 78392749 };
// const objStr = JSON.stringify(obj);//objeyi stringe çevirir

// fs.writeFile("test.json", objStr, writeCallBack);


// APPENDFİLE:dosyayı güncelleme içerisine veri ekleme işlemleri yapar
// const appendFileCallBack=(err)=>{
//     if(err)throw err;
//     console.log("DOSYA DEĞİŞTİ");
// }
// fs.appendFile("test.txt","\nHello world",appendFileCallBack);

// for(let i=0;i<15;i++){
    
// fs.appendFile("test.txt","\nHello world",appendFileCallBack);
// }

// appendFileSync senkron hali
// fs.appendFileSync("test1.txt","\nMerhaba kelebek");


// open: 
// fs.open("opened-file.txt","w",(err,file)=>{
//     if(err) throw err;
//     console.log("kaydedildi");
// })
// senkron hali aşağıdaki,yukarıdaki ise asenkron
// const result=fs.openSync("opened-file-sync.txt","w");
// console.log(result);


// UNLİNK: dosya silme
// fs.unlink("opened-file.txt",(err)=>{
//     if(err)throw err;
//     console.log("Dosya Silindi");
// })
// senkron hali aşağıdaki,yukarıdaki ise asenkron
// const result=fs.unlinkSync("opened-file-sync.txt");
// console.log(result);


// RENAME:dosya isim güncellendirme
// fs.rename("test1.txt","1test.txt",(err)=>{
//     if(err)throw err;
//     console.log("Dosyanın İsmi Değişti");
// })

// const result=fs.renameSync("test2-sync.txt","2test-sync.txt");
// console.log(result);






