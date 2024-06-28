// Write a function to find all letter and number characers from a string and return its count

function countChar(str){
    let myObj = new Object();

    
    for(let char of str){
        if(/[a-zA-0-9]/.test(char)){
            char = char.toLowerCase()
            myObj[char] = ++myObj[char] || 1;
        }
        
    }
    return myObj
}


console.log(countChar("Hello hi 12"))


//we can also use charCode var char = char.charCodeAt(0)   0-9 >47&<58     / A-Z >64 & < 91 /    a-z >96 &  <123