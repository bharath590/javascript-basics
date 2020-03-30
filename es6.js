// Variables are declared using the let keyword are:
// block-scoped
// not initialized to any value.
// not attached to the global object.
// Redeclaring a variable using the let keyword will cause an error.
// A temporal dead zone of a variable declared using the let keyword starts from the block until the initialization is evaluated.
let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the lbock
}
console.log(x);
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
//solution using var
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    }(i))
}
///using let

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

const person = { age: 20 };
person.age = 30;
const person1 = Object.freeze({ age: 20 });
person1.age = 200;
console.log(person, person1);

let scores = [75, 80, 95];
for (const score of scores) {
    console.log(score);
}



function add(...args) {
    console.log(args);
}
add(1, 23, 4);


let data = {
    'name': 'bharath',
    age: 20
}
let fun = function (city, pin, sex) {
    console.log(this.name, this.age, city, pin, sex);
}
// fun.call(data,'hyd','500');
// fun.apply(data,['hyd','500']);
// let fu2 = fun.bind(data,'hyd','400');

Function.prototype.mybind = function (...args) {
    let self = this;
    let dataa = args.shift();
    return function (...args2) {
        self.apply(dataa, [...args, ...args2]);
    }
}
let f1 = fun.mybind(data, 'hyd', '500');
console.log(f1('male'));
