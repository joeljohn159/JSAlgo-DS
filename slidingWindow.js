// naive - O(n2)

// inputs [2,3,5,3,1,2,4] , 3      output : 11

function maxSet(arr, len){
    if(arr.length < len) return null;
    let maxSum = 0,tempSum;
    for(let i=0; i<len; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i=len; i<arr.length ; i++){
        tempSum = tempSum + arr[i] - arr[i-len]
        if(tempSum > maxSum){
            maxSum = tempSum
        }
    }
    return maxSum;
}

console.log(maxSet([2,3] , 3 ));