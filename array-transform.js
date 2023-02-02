"use strict";

//Double every single card *************

const deck = [1, 2, 3, 4, 10];

function seeingDouble(cards) {
    const newDeck = cards.map(card => card * 2);
    console.log('newDeck', newDeck);
    return newDeck;
}

const result = seeingDouble(deck);
console.log('result', result);
// => [2, 4, 6, 8, 20]


//añadir cartas entremedio del array *********************

//Elyse wants to triplicate every 3 found in the deck. If a deck 
//started with a single 3, after the trick the deck would have three 3's in place of the original.

const deck2 = [1, 3, 9, 3, 7];

function threeOfEachThree(cards) {
    const newCards = cards.reduce((newDeck, card) => {
        if (card === 3) {
            newDeck.push(card, card, card);
        } else {
            newDeck.push(card);
        }    
        return newDeck;
    }, []);
    return newCards;
}

const result2 = threeOfEachThree(deck2);
console.log('result2', result2);
// => [1, 3, 3, 3, 9, 3, 3, 3, 7]


//ejemplos de reduce ****************
let arr = [1, 2, 3, 4];

// Get the sum of elements
arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// => 10

// Classify the numbers by whether they are odd or not
arr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.even.push(currentValue);
    } else {
      accumulator.odd.push(currentValue);
    }

    return accumulator;
  },
  { even: [], odd: [] }
);
// => { even: [2, 4], odd: [1, 3] }


// reaorder the deck ***************
const deck3 = [10, 1, 5, 3, 2];
function reorder(cards) {
    const copyDeck = [...cards];
        //console.log('cards ', cards);
        //console.log('copyDeck ', copyDeck);

    const reorderDeck = cards.sort((a,b) => a-b);
    console.log(reorderDeck);
    return reorderDeck;
}

reorder(deck3);
// => [2, 3, 5, 1, 10]