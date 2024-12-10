class StudentDetails{
    constructor(sname, sage){
        this.sname = sname 
        this.sage = sage
    }

    getStdDetails(){
        let arrr = [this.sname, this.sage]
        return arrr
    }
}

class TeacherDetails extends StudentDetails{
    constructor(sname, sage, tid){
        super(sname, sage)
        this.tid = tid 
    }

    getTeacherDetails(){
        const teacherArr = [this.sname, this.sage, this.tid]
        return teacherArr
    }
}

// create object for access the details 

let t = new TeacherDetails('Ankit', 27, 105)
console.log('t ===<<<>>>>', t)
console.log('std details ===<<<>>', t.getTeacherDetails())
