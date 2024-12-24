function next_lexicographical_permutation(s){
    let l = s.split('');
    let n = l.length;
    console.log(l)
    console.log(n)

    let i = n - 2 
    //Step 1: Find the largest index `i` such that l[i] < l[i + 1]
    while (i > 0 &&  l[i] < l[i + 1]) {
        i--
        
    }

    if(i === -1){
        return 'no answer'
    }

    let j = n - 1;
    // step-2 : finde l[j] <= l[i]
    while (l[j] <= l[i]) {

        j--
        
    }
    // swap the values 
    l[i], l[j] = l[j], l[i]

    let suffix = l.slice(i + 1).reverse();
    l = l.slice(0, i + 1).concat(suffix);

    // Return the next lexicographical permutation as a string
    return l.join('');

}