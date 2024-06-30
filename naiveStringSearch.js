function stringSearch(str, subString){
    var count = 0;
    for (let i=0; i<str.length ; i++){
        for(let j=0; j<subString.length;j++){
            if(subString[j] !== str[i+j]) break ;
            if(j === subString.length -1) count++;
        }
    }
    console.log(count)
    return count
}

stringSearch("lolfsf addffaddfg" , "df")