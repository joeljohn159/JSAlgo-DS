class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    recurseTree(val,curr){
        if(val > curr.val){
            if(!curr.right){
                var newNode = new Node(val);
                curr.right = newNode;
                return
            }
            this.recurseTree(val, curr.right);
        }else{
            if(!curr.left){
                var newNode = new Node(val);
                curr.left = newNode;
                return
            }
            this.recurseTree(val, curr.left);
        }
    
    }

    insert(val){
        var newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        this.recurseTree(val,this.root);
        return this;
        
    }

    find(val){
        if(this.root === null) return false;

        var curr = this.root
        while(true){
            if(val > curr.val){
                if(curr.right === null) return false;
                curr = curr.right
            }
            else if(val < curr.val){
                if(curr.left === null) return false;
                curr = curr.left;
            }else{
                return true;
            }
        }
    }

    bfs(){
        if(!this.root) return undefined;
        var final = [];
        var que = [];
        que.push(this.root)
        while(que.length){
            let Qele = que.shift();
            final.push(Qele.val)
            
            if(Qele.left)que.push(Qele.left)
            if(Qele.right)que.push(Qele.right)
        }
        return final
    }

    dfsPreOrder(){
        var final = [];
        function traverse(node){
            if(node.left){
                traverse(node.left);
            }
            final.push(node.val);
            if(node.right){
                traverse(node.right);
            }
        }
        traverse(this.root);
        return final;
    }
}

var myBST = new BST();
console.log(myBST.insert(12));
console.log(myBST.insert(2));
console.log(myBST.insert(2));
console.log(myBST.insert(20));
console.log(myBST.insert(21));
console.log(myBST.insert(7));
console.log(myBST.insert(7));
console.log('-------------------------------------------------------------------------------------------------');
console.log(myBST.find(70))
console.log(myBST.bfs())
console.log(myBST.dfsPreOrder())


