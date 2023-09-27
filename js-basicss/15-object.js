
/*
const person = {
    name: "Ayşe",
    surname: "Arucu",
    age: 20,
    logNameAndSurname: () => {
        console.log("Ayşe", "Arucu");
    }
}
// console.log("İsim: " + person.name);
// console.log("Soyisim: " + person.surname);
// console.log("Yaş: " + person.age);

// console.log(typeof person);//object

// DOT NOTATİON
console.log(person.name);

// SET NOTATİON
console.log(person["name"]);

person.logNameAndSurname();

*/



class Test{
    constructor(id){
        this.id=id
    }
    logID(){
        console.log(this.id)
    }
}

const person = {
    name: "Ayşe",
    surname: "Arucu",
    age: 20,
    logNameAndSurname: () => {
        console.log("Ayşe", "Arucu");
    },
    sum:(a,b)=>{
        console.log(a+b);
    },
    logNameAndSurnameObjectMethod(){
        console.log(this.name,this.surname,this.age);
    },
    value:15,
    testClass:Test,
    test:new Test("test")
}

// DOT NOTATİON
person.logNameAndSurname();
person.sum(10,30);

person.logNameAndSurnameObjectMethod();
 
// SET NOTATİON
person["logNameAndSurnameObjectMethod"]();
person["sum"](10,20);


































