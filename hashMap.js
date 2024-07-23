//METHODS in hashing values 1. Separate Chaining, 2. Linear Probing

class hashMap{
    constructor(size = 48){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let prime = 31;
        for (let i=0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }


    set(key, value){
        let hashBox = this._hash(key);
        if(!this.keyMap[hashBox]){
            this.keyMap[hashBox] = [];
        }
        this.keyMap[hashBox].push([key, value]);
        return this.keyMap;
    }

    get(key){
        let hashBox = this._hash(key);
        let val;
        if(this.keyMap[hashBox]){
            
            this.keyMap[hashBox].forEach(subArr => {
                if(subArr[0] === key){
                    val = subArr[1]
                }
            });
        }   
        return val;
    }
}


let HM = new hashMap(5);
console.log(HM.set("blue","#34hsdf"));
console.log(HM.set("red","#sdfffb"));
console.log(HM.set("green","#34hsdf"));
console.log(HM.set("yellow","#dsdf442"));
console.log(HM.set("cyan","#ds6786"));
console.log(HM.set("orangeblue","#ffff3f"));

console.log(HM.get('blue'))