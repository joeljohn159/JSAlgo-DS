function getDigit(num, pos){
    return  Math.floor(Math.abs(num) / Math.pow(10,pos)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    let max = 0;
    for(let i =0 ;i<arr.length;i++){
     if(digitCount(arr[i]) > max){
        max = digitCount(arr[i])
     }   
    //  max = Math.max(max, digitCount(arr[i]))
    }
    return max
}


function radixSort(arr){
    let maxDigit =  mostDigits(arr);
    for(let i=0 ; i<maxDigit;i++){
        let bucket = Array.from({length:10}, ()=>[]);
        for(let j=0; j<arr.length;j++){
            bucket[getDigit(arr[j],i)].push(arr[j]); 
        }
        arr = [].concat(...bucket)

    }
    return arr;
}

console.log(radixSort([2345,2,545454555,344,546,-562,6464446,6,67]))