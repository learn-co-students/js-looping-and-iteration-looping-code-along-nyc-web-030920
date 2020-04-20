// Code your solutions in this file
function writeCards(arr, msg) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(`Thank you, ${arr[i]}, for the wonderful ${msg} gift!`);
    }
    return ans;
}


function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}