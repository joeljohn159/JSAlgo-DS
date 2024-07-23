class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;

    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first) {
            this.first = this.last = newNode;
            return ++this.size
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next;
        this.size--;
        return temp
        
    }

}


let Queuee = new Queue();
console.log(Queuee.enqueue(1))
console.log(Queuee.enqueue(3))
console.log(Queuee.enqueue(15))
console.log(Queuee.dequeue())
console.log(Queuee.dequeue())
console.log(Queuee.dequeue())