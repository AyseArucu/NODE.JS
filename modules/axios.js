import axios from 'axios';

// GET: sunucudan veri almak için kullanılır.Karakter limiti vardır.
// POST: sunucu üzerine veri yazılır. istek parametreleri gönderir.
// HEAD: genelde bir kaynağın var olup olmadığını sorgulamk için kullanılır.
// DELETE: Sunucu üzerinde belirtilmiş kaynağı silmek için kullanılır. 
// CATCH: Hatalarımı yakalar

// Get -request
// axios.get("https://www.google.com.tr/").then((response) => {

//     console.log(response);

// }).catch (err=> {
//     console.log(e);  
// })



// POST-REQUEST
// axios.post("https://www.facebook.com./",{name:1,username:1}).then((Response)=>{
//  console.log(Response.data);
// }).catch(err=>{
//     console.log(err);
// })


// PUT- REQUEST
// axios.put("https://www.facebook.com/",{name:1,username:1}).then((Response)=>{
//     console.log(Response);
// }).catch(err=>{
//     console.log(err);
// })


// DELETE - REQUEST :get gibi çalışıyor içine body almıyor
// axios.delete("https://www.facebook.com/",{name:1,username:1}).then((Response)=>{
// console.log(Response);
// }).catch(err=>{
//  console.log(err);   
// })


const instance = axios.create({
    baseURL: "https://www.facebook.com",
    timeout: 1000, //kaç milisaniye sonra işlem yanıt vermezse işlemi durdurucağını belirtir.
    headers: {
        'Authorization': "Bearer token",
        'X-Custom-Header': "foobar"
    }
})

instance.defaults.headers.common['Authorization']='Bearer token1'


instance.post('/aysearucuxyz', { name: 1, surnam: 1 }).then(response => {
    console.log(Response.data)
}).catch(err => {
    console.log(err)
})

instance.get('/aysearucuxyz').then(response => {
    console.log(response)
}).catch(err => {
    console.log(err)
})




















