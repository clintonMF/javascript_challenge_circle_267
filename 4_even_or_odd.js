// creating my range function
function range(low, high) {
    let arr = [];
    while(low <= high) {
        arr.push(low)
        low++
    }
    return arr
}

// function for even or odd

function evenOrOdd(arr) {
    for(let num of arr){
        if( num%2 === 0){
            console.log(`${num} is even`)
        }else{
            console.log(`${num} is odd`)
        }
    }
}


evenOrOdd(range(0,15))
