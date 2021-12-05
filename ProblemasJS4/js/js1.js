console.log('-------------------------------Parte 1')
var anObject = {
    foo: 'bar',
    length: 'interesting',
    '0': 'zero',
    '1': 'one'
};
var anArray = ['zero.', 'one.'];

console.log(anArray[0], anObject[0]); //en un array accedes al primer indice con [], mientras que en objetos accedes al valor con el nombre puesto dentro de []
console.log(anArray[1], anObject[1]); //en un array accedes al primer indice con [], mientras que en objetos accedes al valor con el nombre puesto dentro de []
console.log(anArray.length, anObject.length); //.lenght es un metodo para obtener el tamano del arreglo. En el objeto estas accediendo al objeto con nombre length
console.log(anArray.foo, anObject.foo); // en el arreglo no hay ninguna propiedad con el nombre foo, y en el objeto si lo hay
console.log(typeof anArray == 'object', typeof anObject == 'object'); // Un array es considerado objeto igual que un objeto
console.log(anArray instanceof Object, anObject instanceof Object); // Un array es considerado objeto igual que un objeto
console.log(anArray instanceof Array, anObject instanceof Array); // Un objeto no es un tipo Array
console.log(Array.isArray(anArray), Array.isArray(anObject)); // Un objeto no es un tipo Array



console.log('----------------------------------------Parte 2')

var obj = {
    a: 'Hello',
    b: 'this is',
    c: 'javascript'
}
let array = Object.values(obj);
console.log(array);


console.log('----------------------------------------Parte 3');

function numeracion() {
    for (let i = 0; i <= 100; i++) {
        console.log(i + '\n')
    }
}
console.log(numeracion());

console.log('----------------------------------Parte 4')


let zero = 0;

function multyply(x) { return x * 2; }

function add(a = 1 + zero, b = a, c = b + a, d = multyply(c)) {

    console.log(a + '');
    console.log((a + b + c), d);
    return (a + b + c), d;
}
console.log(add(1));
console.log(add(3));
console.log(add(2, 7));
console.log(add(1, 2, 5));
console.log(add(1, 2, 5, 10));

console.log('------------------------------------------Parte5');

class MyClass {
    constructor() {
        this.names_ = [];
    }
    set name(value) {
        this.names_.push(value);
    }
    get name() {
        return this.names_[this.names_.length - 1];
    }
}
const myClassInstance = new MyClass();
myClassInstance.name = 'Joe';
myClassInstance.name = 'Bob';

console.log(myClassInstance.name);
console.log(myClassInstance.names_);

console.log('--------------------------------------Parte 6');

const classInstance = new class {
    get prop() {
        return 5;
    }
};

classInstance.prop = 10;
console.log(classInstance.prop);

console.log('--------------------------------------Parte 7')

class Queue {
    constructor() {
        const list = [];
        this.enqueue = function(type) {
            list.push(type);
            return type;
        };
        this.dequeue = function() {
            return list.shift();
        };
    }
}
var q = new Queue;
q.enqueue(9);
q.enqueue(8);
q.enqueue(7);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);
console.log(Object.keys(q));


console.log('--------------------------Parte 8');


class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;

    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;

    }
}
let person = new Person('John', 'Doe');
console.log(person.firstName, person.lastName);
person.firstName = 'Foo';
person.lastName = 'Bar';
console.log(person.firstName, person.lastName);