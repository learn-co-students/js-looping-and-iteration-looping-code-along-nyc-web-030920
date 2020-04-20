// Code your solutions in this file
function writeCards(names){
    const cards = [];
    for(let name of names){
        cards.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return cards;
}

function countDown(start){
    let innerCount = start;
    while(innerCount >= 0){
        console.log(innerCount);
        innerCount--;
    }
}