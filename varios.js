/* 1. Find the position of a card
const card = 2;
const getCardPosition = (array, card) => array.indexOf(card)

console.log(getCardPosition([9, 7, 3, 2], card)); 
// => 3
*/

/* 2. Determine if a card is present 
const card = 3;
const doesStackIncludeCard = (array, card) => array.includes(card);

console.log(doesStackIncludeCard([2, 3, 4, 5], card));
// => true
*/

/* 3. Determine if each card is even
const isEachCardEven = (array) => {
    return array.every(card => (card % 2 === 0)); 
}
console.log(isEachCardEven([2, 4, 6, 7]));
// => false
 */

/* 4. Check if the stack contains an odd-value card 

const doesStackIncludeOddCard = array => array.some(num => num % 2 !== 0);
console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8]));
// => true
*/
/* 5. Get the first odd card from the stack
const getFirstOddCard = array => array.find(num => num % 2 !== 0);
console.log(getFirstOddCard([4, 2, 8, 7, 9])); 
// => 7
*/
/* 6. Determine the position of the first card that is even PAR 
const getFirstEvenCardPosition = array => array.findIndex(num => num % 2 === 0);
console.log(getFirstEvenCardPosition([5, 2, 3, 1])); 
// => 1
*/
/* console.log(); */

const text = 'la Hora 23 MoneYaSa';

//let pattern = /[A-Z]*{3,}/g;
let pattern = /.+[A-Z].+[A-Z].+[A-Z]/g;
//const testText = pattern.test(text);
const testText = text.match(pattern);
console.log(testText);



const textArr = Array.from(text);
console.log(textArr);
const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const totalMayusculas = textArr.reduce((totalMay, item) => {
    console.log(item);
        if (mayusculas.includes(item)) {
            return totalMay += 1;
        }

        return totalMay;
}, 0);

console.log('totalMayusculas', totalMayusculas);