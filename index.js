// Code your solutions in this file
function writeCards(friends) {
    let array = []
    for (let i = 0; i < friends.length; i++) {
        array.push(`Thank you, ${friends[i]}, for the wonderful surprise gift!`);
    }

    return array;
}

function countDown(num){
    let countdown = num
    while (countdown > 0) {
        console.log(countdown--)
    }
    if (countdown == 0) {console.log(countdown)}
}