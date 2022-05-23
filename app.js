//Object Enhancements

//Shorthand Property Names:

//If key and variable share the same name, no need to repeat yourself

// function makePerson (first, last, age){
//     return {
//         first: first,
//         last: last,
//         age: age,
//         isAlive: true
//     }
// }

function makePerson (first, last, age){
    return {
        first,
        last,
        age,
        isAlive: true
    }
}

//Shorthand Methods:

// const mathStuff = {
//     x: 200,
//     add: function(a,b){
//         return a+b;
//     },
//     square: function(a) {
//         return a*a;
//     }
// }

//can remove the 'function' keyword with shorthand methods
//Arrow functions dont work with shorthand methods, but can still be used in the object

const mathStuff = {
    x: 200,
    add(a,b){
        return a+b;
    },
    square(a) {
        return a*a;
    },
    multiply: (a,b) => {
        return a * b;
    }
};


//Computed Property Names:

//Concise way of adding a key to an object where the key name is a variable

// 'periwinkle' '9c88ff'
// 'bright ube' 'D6A2E8'

// const color = {
//     periwinkle: '9c88ff',
//     '9c88ff': 'periwinkle' 
// };

//Instead of creating a object literal and defining all the property names, and then returning that object, we can use computed property names to do it all at once

// function makeColor(name, hex){
//     const color = {};
//     color[name] = hex;
//     color[hex] = name;
//     return color;
// }

function makeColor(name, hex){
    return {
        [name]: hex,
        [hex]: name
    };
};

//Can also add code into the computed property names for dynamic key names; Don't get fancy though


const mystery = {
    [6+7]: 'thirteen'
};

const obj = {};
obj[6+7] = 'thirteen';

