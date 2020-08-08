class Queue {
    constructor() {
        this.array = [];
        this.count = 0;
    }
    enqueue = (ele) => {
        this.array.push(ele);
        this.count++;
    }
    dequeue = () => {
        if(this.count>0){
            this.count--;
            return this.array.shift();
        } else{
            return "queue empty"
        }
    }
}


let q = new Queue();
q.enqueue(1);
q.enqueue(12);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log("aaaaa",q.array);