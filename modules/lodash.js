import _, { debounce, isEqual } from 'lodash';


// İsEqual:Herhangi iki objenin birbirine eşit olup olmadığını bakar.True veya false döner.
/*ğ     
const obj1={
    name:'ALİ',
    age:20,
    location:{
        city:'New York',
        state:'New York',
        obj:{
            number:1
        }
    }
}


const obj2={
    name:'ALİ',
    age:20,
    location:{
        city:'New York',
        state:'New York',
        obj:{
            number:1
        }
    }
} 

// obj1 ile obj2 birbirine eşitmi diye bakılcak. eşitse true değilse falses
const İsEqual=_.isEqual(obj1,obj2);
console.log(İsEqual);  

console.log(obj1===obj2);
*/



// İSEMPTY : Herhangi bir objenin boş olup olmadığını kontrol eder. İçi dolu olduğunda false , olmadığında true döner.

// const obj1={name:'Gabriella'}; //içi dolu olduğundan false döner
// console.log(_.isEmpty(obj1)); 

// const obj2={}; //içi boş olduğundan true döner.
// console.log(_.isEmpty(obj2));

// const array1=[];
// console.log(_.isEmpty(array1));

// const array2=[2,3];
// console.log(_.isEmpty(array2)); 


//null bir obje olmamasına rağmen null gelirse true dö diye bir mekanizma bulunmaktadır.
// const nullValue=null;
// console.log(_.isEmpty(nullValue));


// true döndü
// const undefinedValue=undefined
// console.log(_.isEmpty(undefinedValue)); 




// SORTBY : Bir array'i belli bir parametreye göre sıralamızı sağlar.
// const users = [
//     { 'user': 'fred', 'age': 80 },
//     { 'user': 'ali', 'age': 9 },
//     { 'user': 'mehmet', 'age': 10 },
//     { 'user': 'irem', 'age': 90 }
// ]


// // Yaşı küçükten büyüğe  sıralar
// console.log(_.sortBy(users,[(user=>user.age)]))

// // Yaşı büyükten küçüğe sıralar
// console.log(_.sortBy(users,[(user=>user.age)]).reverse())



// ORDERBY : Birden çok sıralama yapmamızı sağlar.
// const users = [
//     { 'user': 'fred', 'age': 80 },
//     { 'user': 'ali', 'age': 9 },
//     { 'user': 'mehmet', 'age': 10 },
//     { 'user': 'irem', 'age': 90 }
// ]

// Önce usera sonra yaşa göre sıralama yapıyor.  Yaşta büyükten küçük,userda az karakterden çok karaktere doğru bir sıralama yaptı.
// const arr=_.orderBy(users,['user'],['desc'])
// console.log(arr);


// const secondOrderArr = _.orderBy(users, ['user', 'age'], ['desc', 'asc']);
// console.log(secondOrderArr);


// UNİON : içerisine verilen değerlerin hepsini okur unit olan değeri bir araya toplar.
// sayılarla çalışırken tek bir arraye dönüştürmek için kullanılabilir.
// const unified=_.union([1],[1,2,3],[0],[4],[2,2,3]);
// console.log(unified);



// CLONEDEEP : Bir obje içerisinden başka bir objeye  atmaya  çalışıyor. klonlayıp yapıyor.
// tekrar et 
// const obj={
//     name:{
//         title:'as',
//         first:'bs',
//         last:'enj'
//     },
//     timezone:{
//         offset:'+3:00',
//         description:'Istanbul Türkiye'
//     }
// }

// const dummyClone=obj;
// const clone=_.cloneDeep(obj);

// // console.log(clone);
// console.log('check dummyClone:',obj===dummyClone);
// console.log('check clone deep:',obj===clone);
// console.log('_.isEqual method check:',_.isEqual(obj,clone));



// DEBOUNCE : Yalnızca tekrarlanan bir eylem tamamlandıktan sonra gerçekleşmesi gereken davranışı uygulamak için kullanışlıdır.

// bir işlemi tekrar tekrar çalıştırmak istersek aşağıdaki 4 işkemi 2saniyede getirir.
const fn=() =>console.log('Fonksiyon Çalıştı');
const debounceFn=_.debounce(fn,2000); //2000=2saniye bekleme süresi
debounceFn();
debounceFn();
debounceFn();
debounceFn();






















