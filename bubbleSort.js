function BubbleSort(arr){
    var swapped;
    const swap = (arr, inx1, inx2) => {
        [arr[inx1] , arr[inx2]] = [arr[inx2], arr[inx1]]
        return arr
    }
    for (let i=arr.length; i>0; i--){
        swapped = false;
        for(let j = 0; j<i-1; j++ ){
            if(arr[j] > arr[j+1]) {
                swapped = true;
                arr = swap(arr, j , j+1)
            }
        }
        if(!swapped) break;
    }
    return arr
}

console.log(BubbleSort([5,1,2,3,4,56]))