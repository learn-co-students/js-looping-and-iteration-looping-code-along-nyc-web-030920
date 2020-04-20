// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i <gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);
names = ["Ada", "Brendan", "Ali"]
function writeCards(names,event){
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!}`);
    }
    return names;
}

writeCards(names,"birthday")

function writeCards(names,event){
    while (i < names.length){
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!}`);
    i++;
    }
    return names;
}

writeCards(names,"birthday")

function countDown(x){
    while (x >= 0) {
        console.log(x);
        x--;
    }
}
