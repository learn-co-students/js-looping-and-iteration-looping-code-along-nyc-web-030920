// Code your solutions in this file

// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   }

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }


function writeCards(arrayName, eventName) {
    let newArray = []
    for (let i = 0; i < arrayName.length; i++) {
        newArray.push(`Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!`);
    }

    return newArray
}

function countDown(count) {
    while (count >= 0) {
        console.log(count)
        count--
    }
    
}