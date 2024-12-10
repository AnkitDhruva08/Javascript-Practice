class PersonDetails{
    constructor(name, age, dsg){
        this.name = name;
        this.age = age;
        this.dsg = dsg;
    }

}


class StudentDetails extends PersonDetails{
    constructor(name, age, dsg, sid){
        super(name, age, dsg)
        this.sid = sid
    }

    getDetails(){
        let resultsArray = [this.name, this.age, this.dsg, this.sid]
        return resultsArray
    }
}

class NewClass extends StudentDetails{
    constructor(name, age, dsg, sid, addr){
        super(name, age, dsg, sid)
        this.addr = addr
    }

    getAllDetails(){
        let allDetails = [this.name, this.age, this.dsg, this.sid, this.addr]
        return allDetails
    }
}

// creating object for acceess the class details 
let S = new StudentDetails('Ankit', 27, 'Software Engineer', 105)
console.log('S ===<<<<>>>', S)

console.log('Detaisl Function call ===<<>>>', S.getDetails())

// creating object for acceess the class details 
let A = new NewClass('Ankit', 27, 'Software Engineer', 105, 'Mumabi')
console.log('A ===<<<<>>>', A)

console.log('Detaisl Function call ===<<>>>', A.getAllDetails())