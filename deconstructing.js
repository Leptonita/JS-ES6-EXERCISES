const deck = [5, 4, 7, 10];
const getFirstCard = (array) => {
   const [a, ...resto] = array;
   console.log(a);
   return a; 

}

getFirstCard(deck);
// => 5

function insertFaceCards(array) {
    const arrayToInsert = ['jack', 'queen', 'king']
    const [a, ...resto] = array;
    const newArr = [a, ...arrayToInsert, ...resto];
    console.log('newArr', newArr);
    return newArr;
}

insertFaceCards(deck);
// => [5, 'jack', 'queen', 'king', 4, 7, 10]