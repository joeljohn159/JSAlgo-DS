function insertionSort(arr){
    
    for(var i=1; i<arr.length; i++){
        let currVal = arr[i];
        for(var j=i-1 ; j>=0 && arr[j]>currVal; j--){
            arr[j+1] = arr[j]
        } 
        arr[j+1] = currVal;
    }
    return arr;
}

console.log(insertionSort([3,4,5,6,7,3,2]));