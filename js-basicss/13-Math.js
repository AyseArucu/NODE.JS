// console.log(Math.PI);
// console.log(Math.E);

// MATEMATİK METODLARI

// MUTLAK DEĞER
// const a=Math.abs(-5);//-5 İLE 5İN MUTLAK DEĞERİ EŞİT.
// console.log(a);


// SİNUS - KOSİNUS - TANJANT - KOTANJANT (TRİGONOMETRİ)
/*
const radianCoverter = Math.PI / 180;
const degree = 45;

// 45 derecenin sinusunu almak
const a = Math.sin(degree * radianCoverter);
console.log(a);

// 45 derecenin kosinusunu almak
const y = Math.cos(degree * radianCoverter);
console.log(y);

// Tanjant
const z=Math.tan(degree*radianCoverter);
console.log(z);

// Kotenjant
const ct=1/z;
console.log(ct);
*/


// 3 e**x 2 Euler Üstü
/*
const x=Math.exp(2);
console.log(x);

const y=Math.E ** 2;
console.log(y);
*/


// Logaritma
/*
const x=Math.log(10); 
const y=Math.log10(10);//log 10 tabanında 10 =1 dir
const z=Math.log(Math.E);// 1'e eşit. 

console.log(x);
console.log(y);
console.log(z);
*/

//MAX=maksimum MİN=minimum
/*
const max=Math.max(3,4,5,7,2,9,11,34,67);
console.log(max);//maksimum değerini gösterir. =67

const min=Math.min(3,8,12,34,89,1,23);
console.log(min);//minumum değerini gösterir. =1
*/


//TEK DİZİ ÜZERİNDEN MAX VE MİN DEĞERİ BULMA

/*
const arr = [1, 4, 8, -90, 34, 89, 34, -12, 56];

const min = Math.min(...arr);//3 nokta koymamızın sebebi arr içerisindeki tüm sayıları sayması. 3 nokta olmadığında nan değeri döndürüyor.
console.log(min);

const max = Math.max(...arr);
console.log(max);

*/


// POW: x'in değerini y'nin kuvvetine döndürür.
/*
const pow=Math.pow(2,3); //2'nin küpünü alır. 2 üzeri 3 =8
console.log(pow);

const pow2=Math.pow(3,4);// 3 üzeri 4 = 81
console.log(pow2);

*/



/*
// Random: 0 (dahil) ile 1 (hariç) arasında rastgele bir sayı döndürür.
const random = Math.random();
console.log(random);

//5 ile 6 aarasında rastgele sayı üretme
const randomCalc = 5 + random;
console.log(randomCalc);

// 0 ile 100 arasında sayı üretme
const randomCal = 0 + (random * 100)
console.log(randomCal);

// 10 ile 100 arasında sayı üretme
const randomCa = 10 + (random * 100)
console.log(randomCa);
*/


/*
// Round= random sayısını isediğimiz aralığa katabiliyoruz.
// Ceil= sayıyı yukarı yuvarlar.
// floor= sayıyı aşağıya yuvarlar.
const round=Math.round(0.4999);
const ceil=Math.ceil(0.000001); //1'e yuvarlar.
const floor=Math.floor(2.9999); //2'e yuvarlar.
const trunc=Math.trunc(2.898747923); //her türlü 2 yazıyor. yuvarlama yapmaz.


console.log(round);
console.log(ceil);
console.log(floor);
console.log(trunc);
*/


/*
//SİGN: sayının negatifmi pozitifmi diye kontrol eder. pozitif ise 1,negatif ise 0 dır.
const sign=Math.sign(10);
console.log(sign);
*/


// kare ve küp kök

// 81 hangi sayının karesidir onu gösterir.
// const sqrt=Math.sqrt(81);
// console.log(sqrt);

//81 hangi sayının karesiyse o kare hangi sayının karesidir. 
// const sqrt=Math.sqrt(Math.sqrt(81));// sonuç: 3
// console.log(sqrt);

// cbrt: hangi sayının küpü olduğunu gösterir.
const cbrt = Math.cbrt(8);// sonuç:2
console.log(cbrt);











