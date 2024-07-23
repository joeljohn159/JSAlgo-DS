// function selectionSort(arr){
//     const swap = (arr,idx1,idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]];
//         return arr;
//     }

//     for(let i = 0 ; i < arr.length-1 ; i++){
//         for(let j=i+1 ; j<arr.length ; j++){
//             if(arr[i] > arr[j]) arr = swap(arr,i,j)
//         }
//     }
//     return arr;
// }

function selectionSort(arr){
    const swap = (arr,idx1,idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]];
        return arr;
    }

    for(let i = 0 ; i < arr.length ; i++){
        let lowest = i;
        for(let j=i+1 ; j<arr.length ; j++){
            if(arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if(lowest !== i) arr = swap(arr,i,lowest)
    }
    return arr;
}

console.log(selectionSort([34,2,3,5,6,77,3,2]))