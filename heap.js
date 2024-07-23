class MaxBinaryHeap{
    constructor(){
        this.arr = [];
    }

    insert(val){
        this.arr.push(val);
        if(this.arr.length === 1) return true;
        var curr = this.arr.length - 1;
        var parent = Math.floor((curr - 1)/2);

        function swap(a,b, arr){
            arr[a] = arr[a] + arr[b];
            arr[b] = arr[a] - arr[b];
            arr[a] = arr[a] - arr[b];
        }
        while(this.arr[curr] > this.arr[parent]){
            swap(curr, parent, this.arr);
            curr = parent;
            parent = Math.floor((curr - 1)/2);
            if(curr <= parent) break;
        }
        return this.arr
    }

    extractMax(){
        const max = this.arr[0]
        const end = this.arr.pop();
        if(this.arr.length > 0){
            this.arr[0] = end;
            this.sinkDown();
        }
        return max;


    }


    sinkDown(){
        let idx = 0;
        let element = this.arr[0];
        let length = this.arr.length;

        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.arr[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.arr[leftChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }

            if (!swap) break;
            this.arr[swap] = element; 
            this.arr[idx] = this.arr[swap];
            idx = swap;

        }
    }

    extractMaxRecursive(){
        const max = this.arr[0];
        const end = this.arr.pop();
        if(this.arr.length <= 0) return max
        this.arr[0] = end;
        this.recuriveSinkDown(0);
        return max;
    }

    recuriveSinkDown(curr){
        let currentElement = this.arr[curr]
        let leftChildIdx = 2 * curr + 1; 
        let rightChildIdx = 2 * curr + 2;
        let length = this.arr.length
        let leftChild, rightChild, swap;

        if(leftChildIdx < length) {
            leftChild = this.arr[leftChildIdx]
        }
        if(rightChildIdx < length){
            rightChild = this.arr[rightChildIdx];
        }

        if(leftChild && rightChild){
            if(leftChild > currentElement) swap = leftChildIdx;
            if(rightChild > leftChild) swap = rightChildIdx;
        }
        if(leftChild && !rightChild){
            if(leftChild > currentElement) swap = leftChildIdx
        }
        if(rightChild && !leftChild){
            if(rightChild > currentElement) swap = rightChildIdx
        }


        if(!swap){
            return;
        }
        else{
            let temp = this.arr[swap];
            this.arr[swap] = currentElement;
            this.arr[curr] = temp;
            this.recuriveSinkDown(swap);
        }

    }
}

var maxBH = new MaxBinaryHeap();
maxBH.insert(23)
maxBH.insert(2)
maxBH.insert(24)
maxBH.insert(25)
maxBH.insert(28)
maxBH.insert(29)

console.log(maxBH.insert(33))
// console.log(maxBH.extractMax())
// console.log(maxBH.extractMax())
// console.log(maxBH.extractMax())
// console.log(maxBH.extractMax())
console.log(maxBH.extractMaxRecursive())
console.log(maxBH.extractMaxRecursive())
console.log(maxBH.extractMaxRecursive())
console.log(maxBH.extractMaxRecursive())
console.log(maxBH.extractMaxRecursive())
console.log(maxBH.extractMaxRecursive())
console.log(maxBH.extractMaxRecursive())
console.log(maxBH.extractMaxRecursive())

