class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority
    }
}

class priorityQueue{
    constructor(){
      this.arr = []  
    }


    enQueue(val, priority){
        let newNode = new Node(val,priority);
        this.arr.push(newNode)
        this.bubbleUp(this.arr.length - 1);
        return this.arr;
    }

    bubbleUp(curr){
        
        let parent = Math.floor((curr - 1)/2);
        console.log(curr, '---', parent)
        if(curr === 0 || parent < 0) return;
        if(this.arr[curr].priority < this.arr[parent].priority){
            let temp = this.arr[curr];
            this.arr[curr] = this.arr[parent];
            this.arr[parent] = temp;
            this.bubbleUp(parent);
        }
        return;
        
    }
}

let PQ = new priorityQueue();
console.log(PQ.enQueue(12,3));
console.log(PQ.enQueue(32,2));
console.log(PQ.enQueue(52,1));
console.log(PQ.enQueue(14,0));