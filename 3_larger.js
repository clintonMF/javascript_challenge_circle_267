function larger(num1, num2) {
    if(num1 >= num2) {
        return num1
    }else{
        return num2
    }
}

let larger1 = larger(-10,3)
let larger2 = larger(20,3)
let larger3 = larger(-10,-10)



console.log(larger1)
console.log(larger2)
console.log(larger3)