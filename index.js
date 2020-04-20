// Code your solutions in this file
function writeCards(names,event){
let g_array = []
    for(let i = 0;i < names.length;i++){
    g_array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return g_array 
}

function countDown(int){
    while (int > -1) {
        console.log(int)
        int--
    }
}
