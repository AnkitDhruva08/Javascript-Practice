class StudentDetails{

    constructor(name, age, rollNom){
        this.name = name 
        this.age = age 
        this.rollNom = rollNom
    }

    getDetails() {
        return (`The name of the  student is ${this.name}.`)
    }
} 


// call the class bu creating new object 

let std = new StudentDetails('Ankit', 20, 76)
console.log('std ===<<<<>>>>', std)
let std1 = new StudentDetails('Amit', 21, 77)
console.log('std1 ===<<<<>>>>', std1)
console.log('function call with object', std1.getDetails())

