const deck = [5, 9, 7, 1, 8];

const getFirstCard = (cards) => {
    //destructuring del array de cartas cards (deck) y
    //utilizo el spread operator para disponer de el primer elemento del resto de cartas a
    const [a, ...resto] = cards;
    //ahora puedo llamar al primer elemento del array a
    console.log(a);
}
const getSecondCard = cards => {
    const [a, b, ...resto] = cards;
    console.log(b);
}

getFirstCard(deck);
// => 5

getSecondCard(deck);
// => 9

const deck3 = [10, 7, 3, 8, 5];

//swap - permutar dos primeras cartas
const swapTopTwoCards = cards => {
    const [a, b, ...resto] = cards;
    const swapArr = [b, a, ...resto];
    console.log(swapArr);
    console.log('resto: ', resto);
}


swapTopTwoCards(deck3);
// => [7, 10, 3, 8, 5]


//quitamos la carta de arriba de
const deck4 = [2, 5, 4, 9, 3];

const discardTopCard = cards => {
    const [a, ...resto] = cards;
    const piles = [a, resto];
    console.log('discardTopCard returns piles: ',piles);
}

discardTopCard(deck4);
// => [2, [5, 4, 9, 3]]


//Añadimos 3 cartas a
const deck5 = [5, 4, 7, 10];

//Elyse will insert a set of face cards (i.e. jack, queen, and king) 
//into her deck such that they become the second, third, and fourth cards, respectively.
const insertFaceCards = cards => {
    const [a, ...resto] = cards;
    const newDeck = [a, 'jack', 'queen', 'king', ...resto];
    console.log(newDeck);
}

insertFaceCards(deck5);
// => [5, 'jack', 'queen', 'king', 4, 7, 10]




