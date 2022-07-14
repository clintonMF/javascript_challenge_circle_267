function integerSign(num1, num2) {
    if(num1 > 0 & num2 > 0){
        return "both numbers are positive"
    }else if( num1 < 0 & num2 < 0){
        return "both numbers are negative"
    }else if(num1 > 0 & num2 < 0 ) {
        return `${num1} is positive, ${num2} is negative`
    }else if(num1 < 0 & num2 > 0) {
        return `${num1} is negative, ${num2} is positive`
    }else{
        return "one of the numbers or both is/are 0"
    }
}


const test1 = integerSign(20, 23)
const test2 = integerSign(-10, 3)
const test3 = integerSign(0, 34)
console.log(test1)
console.log(test2)
console.log(test3)