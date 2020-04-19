// Code your solutions in this file
function writeCards(array, string) {
  let thankYouMessages = [];
  for(let i =0; i < array.length; i++) {
    thankYouMessages.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
  }
  return thankYouMessages;
}

function countDown(num) {
  while(num >= 0) {
    console.log(num)
    num--
  }
}