
// const arr=[0,1,2,3,4,5,6,7,8,9];
// // console.log(arr);
// // console.log(typeof arr);

// const arr2=new Array(0,1,2,3,4,5,6,7,8,9);
// // console.log(arr2);
// // console.log(typeof arr2);



// const arr=[0,1,2,3,4,5,6,7,8,9];
// const strArr=["a","b","c","d","e"];

// const arr2=new Array(0,1,2,3,4,5,6,7,8,9);

// console.log(arr);
// console.log(strArr);
// console.log(arr2);

// Tanımlanan dizide hangi elemana ulaşmak istersek
// console.log(arr[8]); //8 yazdık fakat seçme olayı 0dan başlayarak ilerliyor. yani sonuçta genel 7 seçilmesi gerekirken 8 geçiyor.
// console.log(strArr[4]);
// console.log(arr2[2]);

// lenght: Dizinin uzunluğunu gösterir.
// console.log(arr.length);
// console.log(arr2.length);
// console.log(strArr.length);


// arr dizisindeki tüm verilerin toplamını gösterir.
// let sum=0;
// for(let counter=0; counter < arr.length;counter ++){
//     console.log(arr[counter]); //arr dizisini listeler
//     sum +=arr[counter];
// }
// console.log(sum);


// let concation="";
// for(let counter =0;counter < strArr.length;counter++ )
// {
//     console.log(strArr[counter]);
//     concation += strArr[counter];
// }
// console.log(concation);


// const multiTypeArr=[1,2,3,4,5,6,7,"a","b","c","d"];
// console.log(multiTypeArr);



// const funcArr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }

// ]

// for (let counter=0; counter<funcArr.length;counter++){
//     console.log(funcArr[counter](20,10));
// }




// const objectArr=[
//     {
//         name:"Ayşe",
//         surname:"Arucu",
//         age:20
//     },
//     {
//         name:"Deniz",
//         surname:"Hilal",
//         age:21
//     }
// ]
// for(let counter=0;counter <objectArr.length;counter++){
//     console.log(objectArr[counter].name);
//     console.log(objectArr[counter].surname);
//     console.log(objectArr[counter].age);
// }



// const arr=[0,1,2,3,4,5,6,7,8,9];
// // arr dizisindeki tüm elemanlara 1 ekleme
// for (let counter=0; counter < arr.length;counter++){
//     arr[counter]+=1; //arr[counter]=arr[counter] + 1; 
// }
// console.log(arr);



const arr=[0,1,2,3,4,5,6,7,8,9];
// arr dizisindeki tüm elemanlara 4 ile çarpma
for (let counter=0; counter < arr.length;counter++){
    arr[counter]*=4; //arr[counter]=arr[counter] + 1; 
}
console.log(arr);
















