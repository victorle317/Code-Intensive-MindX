class Person {
    constructor(name,age,sex,address){
        this.name = name,
        this.age = age,
        this.sex = sex,
        this.address = address
    }
    speak(){
        console.log(`Hi my name is ${this.name}`)
    }
    introduce(){
        console.log(
            `Hi my name is ${this.name}, i'm ${this.age} years old,
            I live at ${this.address}`
        )
    }
}

class Crush extends Person {
    constructor(fav,appear){
        super(name, age, sex, address)
        this.fav = fav
        this.appear =appear
    }

}
class Oldgirls extends Person{
    constructor(appear){
        super(name, age, sex, address)
        this.appear=appear
    }
}
class List {
    constructor(owner,person){
        this.owner = owner,
        this.person = []
    }
    showall(){
        this.person.forEach((v) => {
            console.log(v);
        });
    }
    addPerson(someone) {
        this.person.push(someone);
    }

}


//bài 3 
var str = "Hello dolrw, welcome to the universe.";
var n = str.includes("world");
console.log(n)