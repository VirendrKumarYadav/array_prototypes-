console.log("Starting");

const sumOfArray = (a) => a.reduce((a,b)=>a + b, 0);

const sortedArray = (a) => a.sort();

const removeDuplicates = (arr) => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
          // return  ...new Set(arr)
 }



console.log(removeDuplicates([2, 2, 4]));