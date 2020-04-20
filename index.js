// Code your solutions in this file


function writeCards(names, word) {
    let thankYouCards = [];
    let i = 0;
    while (i < names.length) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`);
    i++;
    }
    return thankYouCards;
    
}

function countDown(number) {

    while (number > 0 ) {
        console.log(number);
        number -=1 
    }
    console.log( number );

}