//Frequency Counter

function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false
    }
    for (let i = 0 ; i < arr1.length ; i++){
        let currIndex = arr2.indexOf(arr1[i]**2);
        if(currIndex === -1){
            return false
        }
        arr2.splice(currIndex, 1)
    }
    return true
}

// console.log(same([4,2,3,3,4],[9,16,9,4,4]))

// Anagrams,, try avoiding O(n*2) time complexity rather aim for O(n)

function anagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let freq1 = new Object();
    let freq2 = new Object();

    for (let n of str1){
        freq1[n] = (freq1[n] || 0) + 1;
    }

    for (let n of str2){
        freq2[n] = (freq2[n] || 0) + 1;
    }
    for ( let i in freq1){
        if (!(i in freq2)){
            return false;
        }
        else{
          if (freq1[i] === freq2[i] ){
            return true
          }   
          else{
            return false
          }
        }
    }
}

console.log(anagram("sdsf","ssdf"))