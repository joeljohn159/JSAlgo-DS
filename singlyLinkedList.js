class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}


class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = this.tail = null;
    }

    push(val){
        var node = new Node(val);
        if(!this.head){
            this.head = this.tail = node;
        }
        else{
           this.tail.next = node;
           this.tail = node; 
        }
        this.length++;
        return this


    }

    pop(){
        if(!this.head) return undefined;
        var curr = this.head;
        var pre = curr;

        while(curr.next){
            pre = curr;
            curr = curr.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = this.tail = null;
        }
        return curr
    }

    shift(){
        if(!this.head) return undefined;
        if(this.length === 1) this.head = this.tail = null
        else{
            var temp = this.head.next;
            this.head = temp
        }
        this.length--;
        

    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.tail = newNode
        }else{       
            newNode.next = this.head
        }
        this.head = newNode
        this.length++;
        return newNode
    }

    get(idx){
        let counter = 0;
        let tracker = this.head;
        if (idx < 0 || idx >= this.length) return null;
        while(counter < idx){
            counter++;
            // if(!tracker.next) return tracker.val;
            tracker = tracker.next;
        }
        return tracker;
    }

    set(idx, val){
        let tracker = this.get(idx);
        if(!tracker) return false;
        tracker.val = val;
        return true
    }

    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) {
            this.unshift(val)
            this.length++;
            return true
        }
        if(idx === this.length){
            this.push(val)
            this.length++;
            return true
        }
        var newNode = new Node(val);
        var temp = this.get(idx-1);
        newNode.next = temp.next
        temp.next = newNode;
        this.length++;
        return true;
    }

    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0){
            this.shift()
            return true;
        }
        if(idx === this.length - 1) {
            this.pop();
            return true;
        }
        var prev = this.get(idx - 1)
        var curr = prev.next
        prev.next = curr.next;
        this.length--;
        return true;
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var pre = null;
        var nextX = null;
        for(let i=0; i<this.length;i++){
            nextX = node.next;
            node.next = pre;
            pre = node;
            node = nextX;
        }
        return this
    }

    traverse(){
        var curr = this.head
        while(curr){
            console.log(curr.val)
            curr = curr.next;
        }
        // return this
    }
}


var node1 = new SinglyLinkedList()
console.log(node1.push(12))
console.log(node1.push(82))
console.log(node1.push(2))
// console.log(node1.traverse())
// console.log(node1.shift())
// console.log(node1.traverse())
console.log(node1.unshift(685))
console.log(node1.traverse())
console.log(node1.get(0))
console.log(node1.set(3,79))
// node1.traverse()
node1.insert(0,23)
node1.insert(5,23)
node1.insert(7,2333)
// node1.traverse()
// console.log(node1.remove(0))
// console.log(node1.remove(2))
// console.log(node1.remove(3))
node1.traverse()
console.log(node1.head, node1.tail)
// node1.reverse()
// node1.traverse()


