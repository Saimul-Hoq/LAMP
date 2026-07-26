//Learning prototype
let employee = {
    calcTax(salary){
        return salary*0.1;
    },

    calcBonus : function(salary){
        return salary*0.25;
    }
};

let saimul = {
    name : "Saimul Hoque",
    id : '23-52203-2',
    salary : 30000
};

saimul.__proto__ = employee;
console.log(saimul.calcTax(saimul.salary));
console.log(saimul.calcBonus(saimul.salary));

//Learning class
class Car {
    constructor(){
        console.log("Car is created");
    }
    setBrand(brand){
        this.brandName = brand; 
        //automatically creates a property called brandName and assigns the value of brand to it
    }
    start(){
        console.log("Bhrooom");
    }
    stop(){
        console.log("Thammmm");
    }
};

let bmw = new Car();
let toyota = new Car();

bmw.start();
bmw.setBrand("BMW");
console.log("Brand of this car is " + bmw.brandName);
toyota.stop();

//Learning inheritance
class Parent{
    constructor(){
        console.log("From Parent constructor");
    }
    hello(){
        console.log("Hello from parent");
    }
};

class Child extends Parent{
    // constructor(){
    //     //Child's constructor must call super() first. 
    //     super();
    //     console.log("Talking from child");
    // }
    //Overriding the hello method of parent class
    hello(){
        console.log("Hello from child");
    }
    hello2(){
        console.log("Hello from child");
    }
}

let child = new Child();
child.hello();
child.hello2();

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(this.name + " is eating");
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }
};

class Engineer extends Person{
    //Child's constructor must call super() first. 
    constructor(name, age, field){
        super(name, age);
        this.field = field;
    }
    work(){
        super.eat();
        console.log(this.name + " is working on " + this.field + " subject");
    }
};

let saim = new Engineer("Saimul Hoque", 23, "CSE");
console.log(saim.work());
console.log(saim.eat());

//Objects can have it's own properties and methods
saim.favFood = "Biriyani";
saim.favTask = "Sleep";
saim.talking = () => {
    console.log("Meow Meow");
}

saim.talking();
console.log(saim.favFood);