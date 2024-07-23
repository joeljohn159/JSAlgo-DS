function swap(arr,a,b){
    [arr[a], arr[b]] = [arr[b], arr[a]]
    return arr;
}

function bubble(arr){
    let swapped = false;
    for(let i=arr.length; i > 0 ; i--){
        for(let j=0 ; j<i-1 ; j++){
            if(arr[j] > arr[j+1]){
                swapped = true;
                arr = swap(arr, j, j+1)
            }
        }
        if(!swapped) break;
    }
    return arr;
}

function selection(arr){
    if(arr.length === 0) return undefined;
    
    for(let i=0;i<arr.length ; i++){
        let lowest = i;
        for(j=i+1;j<arr.length; j++){
            if(arr[i] > arr[j]) {
                lowest = j;   
            }

        }
        if(lowest != i) arr = swap(arr,lowest,j)
    }
    return arr;
}


function insertion(arr){
    for(let i=1; i<arr.length; i++){
        let curr = arr[i]
        for(var j= i-1 ; j >=0 && curr < arr[j] ; j--){
            arr[j+1] = arr[j]
        }   
        arr[j+1] = curr
    }
    return arr;
}

console.log(insertion([18,65,85,22,2,4,6,7,8,9,7]))