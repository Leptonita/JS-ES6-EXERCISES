
/* console.log(); */

/* 
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

const str = 'loca'
console.log(str.replace(str.charAt(0), str.charAt(0).toUpperCase()));

const camelize = str => {
    const wordsArr = str.split('-');
    console.log(wordsArr);
    const wordsFirstUpperCase = wordsArr.reduce((finalWord, currentWord, currentIndex) => {
        if (currentIndex === 0) {
            finalWord = currentWord;
        } else {
            finalWord += currentWord.replace(currentWord.charAt(0), currentWord.charAt(0).toUpperCase());
        } 
        return finalWord;
     }, []);
    console.log(wordsFirstUpperCase);    
}
camelize("background-color"); //'backgroundColor'
camelize("list-style-image"); // 'listStyleImage'

/* solution at https://javascript.info/array-methods
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

*/

/* 
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)


const filterRange = (arr, a, b) => arr.filter(item => (item >= a)&&(item <= b))

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)
*/


/* 
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.


function filterRangeInPlace(arr, a, b) {
    return arr.forEach((item, i) => { 
        if(!((item >= a)&&(item <= b))) {
            arr.splice(i,1);
        }    
    })
}

const arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
*/

/* COPY and sort array
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.


function copySorted(arr) {
  //const arrCopy = [...arr];
  //arrCopy.sort();

   // console.log(arrCopy);
  //return arrCopy;

  console.log(arr);
  //para numeros
  /* arrCopy.sort((a, b) => {
          if (a - b < 0) {
              return -1;
          } else if (a - b > 0) {
              return 1;
          } else {
              return 0;
          }
          return a - b;
      }
  ); 

  //

    //const arrCopy = arr.slice(); copias array arr
  return arr.slice().sort();
}

const arr = ['arbol', 'tapa', 'ala'];
console.log(copySorted(arr));
*/

/* calculator 
class Calculator {
    constructor (str) {
        this.str = str;
    }

    calculate(str) {
        let elementArr = str.split(' ');

        let a = Number(elementArr[0]);
        let operator = elementArr[1];
        let b =  Number(elementArr[2]);
        
         let result;
         switch (operator) {
            case "+":
              return a + b;
              break;
            case "-":
                return a - b;
                break;
            case "*":
              return a * b;
              break;
            case "/":
              return a / b;
              break;
            default: 
              return "something went wrong";
              break;
         }
        
    }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
*/

/* garbage ideas from calcultor using if rather than switch 
if (operator == "+") {
           let result = a + b;
           return result;
        }

        if (operator == "-") {
            let result = a - b;
            return result;
         }
 */

/*
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:


function getAverageAge(users) {
  const totalAge = users.reduce((total, user) => total + user.age, 0);
  return totalAge / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
*/

/* FILTER UNIQUE ARRAY MEMBERS --- 3 SOLUCIONES
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.

For instance:

// 1. mi solucion
function unique(arr) {
  const arrUnics = arr.reduce((unicsArr, item) => {
    if (!(unicsArr.includes(item))) {     
      unicsArr.push(item);
    }
    return unicsArr;
  }, [])
  return arrUnics.join(', ');
}

//2. solucion propuesta en https://javascript.info/array-methods#copy-and-sort-array
function unique(arr) {
  let unicsArr = [];
  for (let item of arr) {
    if (!unicsArr.includes(item)) {
      unicsArr.push(item);
    }
  }
  return unicsArr.join(", ");
}


// 3. solucion usando SET
const unique = arr => Array.from(new Set(arr)).join(", ");

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings)); // Hare, Krishna, :-O

*/

/* Create keyed object from array
Let’s say we received an array of users in the form { id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:

let users = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);


// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

function groupById(arr) {
  const usersByIdObj = arr.reduce((groupArr, user) => {
    groupArr[user.id] = user;
    return groupArr;
  }, {})
  return usersByIdObj;
}

let users = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById);