/*

// Güncel tarih 
const date=new Date();
const dateStr=String(date);
const timeStamp=Date.now();//şuanın zamanı milli  saniye cinsinde geliyor. sürekli değişiyor.

console.log(date);
console.log(dateStr);
console.log(timeStamp);
*/

/*
const date1=new Date("2023-09-15T14:00:01.349");
const strDate1=String(date1);

console.log(date1);
console.log(strDate1);
*/


/*
// 0:ocak 1:şubat 2:mart ... ay 36 ise 3 yıl ileri atıyor
const date2=new Date(2020,0,1,14,0,1,34);// yıl ay gün saat dakika saniye milisaniye sıralaması
console.log(date2);

// const date3=new Date(121312312);//sonucu 1970-01-02T09:41:52.312Z
// console.log(date3);
*/

// 1 yıl öncesine gidiyor
// const date = new Date("2022-03-01T03:00:00.000")
// for (let counter = 0; counter < 365; counter++) {
//     date.setDate(date.getDate() - 1);
//     console.log(date);
// }


// const date = new Date("2022-03-01T03:00:00.000")
// for (let counter = 0; counter < 366; counter++) {
//     date.setDate(date.getDate() + 10);//10'ar 10'ar artarak ilerletiyor.
//     console.log(date);
// }


// const date = new Date("2020-03-01T03:00:00.000")
// console.log(date.getDay());// hangi gün olduğunu gösterir. fakat sayma sistemi 0dan başlar

// console.log(date.getDate()+1);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getHours());

/*
// 2 Tarih arasında geçen zaman farkı
const date1=new Date("2022-03-01T03:00:00.000");
const date2=new Date();

const converter=24*60*60*1000;//gün dönüştürücü
console.log(Math.trunc((date2-date1)/converter));

*/


















