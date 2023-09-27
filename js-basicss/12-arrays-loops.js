// Arrayler üzerindeki döngüler

//Dizideki Tüm değerlerin toplamı
// const arr=[12,34,23,56,78,34,78,45];
// let sum=0;

// for(let counter=0;counter<arr.length;counter++){
//     sum +=arr[counter];
// }
// console.log(sum);


//FOR LOOP

// const arr = [12, 34, 23, 56, 78, 34, 78, 45];

//iki değişkeni aynı türden peşpeşe tanımlama işlemi arasına virgül konarak yapılır.
/*
let counter = 0,
    sum = 0;

while (counter < arr.length) {
    sum += arr[counter];
    counter++;
} 
console.log(sum);
*/

// for in:for in ifadesi bir Nesnenin özellikleri arasında döngü yapar
/**
 * Dizin sırası önemliyse for in over Array öğesini kullanmayın .
 * Dizin sırası uygulamaya bağlıdır ve dizi değerlerine beklediğiniz sırayla erişilemeyebilir.
 * Sıra önemli olduğunda for döngüsü, for of döngüsü veya Array.forEach() kullanmak daha iyidir . 
 * */




/*
const arr = [12, 34, 23, 56, 78, 34, 78, 45];
// arr dizisindeki tüm değerlerin toplamını getiriyor.

let sum=0;
for (const key in arr){
    sum+=arr[key];
}
console.log(sum);
*/


// FOR OF
const arr = [12, 34, 23, 56, 78, 34, 78, 45];

let sum=0;
for(const value of arr){
    sum+=value
}
console.log(sum);




















