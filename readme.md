<!-- this is readme.md file for my package  -->
# Array Prototypes
1. install the the basic package
2. use redline command and configure is methods
3. configure the best way to download the package


### Install
     npm install array_proptotype
     cd array_proptotype
     npm start

or

    npm install -g array_proptotype
    node-array_proptotype

### API

When starting calculator, it starts a node repl with all of the following properties set as properties of the `GLOBAL` object.
All Math properties are replaced with `Math.(prop)` so you can write `var f = func('f(x) = sin(x)')` instead of `var f = func('f(x) = Math.sin(x)')`

#### func

### for sum of array elements
const sumOfArray = (a) => a.reduce((a,b)=>a + b, 0);

### for sort of array elements
const sortedArray = (a) => a.sort();

### for remove duplicates from elements
const removeDuplicates = (arr) => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
          // return  ...new Set(arr)
 }

  
