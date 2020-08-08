function stack() {
    this.array = [];
    this.count = 0;
}
stack.prototype.push = function (ele) {
    this.array.push(ele);
    this.count++;
}
stack.prototype.pop = function () {
    if (this.count > 0) {
        this.count--
        return this.array.pop();
    } else {
        return -1;
    }
}

let q = new stack();
q.push(1);
q.push(2);
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
console.log(q.array);
