function PersonDetais(fname, lname){
    let firstName = fname 
    let lastName = lname 


    let noAccessDetails = function(){
        let resultsArray = [firstName, lastName]
        console.log('resultsArray ===<<>>', resultsArray)
        return resultsArray
    }

    this.getDetails = function(){
        let array = [firstName, lastName]
        return array
    }
}


//  create boject for acces the functainality 

let p = new PersonDetais('Ankit', 'Mishra')
console.log('p ===<<<>>>', p.firstName)
console.log('noAccessDetails ===<<<>>>', p.noAccessDetails)
console.log('getDetails ===<<<>>>', p.getDetails())

