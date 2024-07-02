function merge(arr1, arr2){
    let newArr = [];
    let i=0,j=0;
    while( i < arr1.length || j < arr2.length){
        if(arr1[i] < arr2[j] || j === arr2.length) {
            newArr.push(arr1[i])
            i++;
        }else{
            newArr.push(arr2[j])
            j++
        }
    }
    return newArr;
}


function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }else{
        let half = Math.floor(arr.length/2);
        return merge(mergeSort(arr.slice(0,half)), mergeSort(arr.slice(half)))
    }
}



console.log(mergeSort([100,52,-89,4545,-2,3,4,8,8,6,6,8,9]))
// i=3 - 4,j=3 - 3  (3,4,6,8)(4,6,8)  
// 3,4,4,6, 6,8
// (8)(8)


