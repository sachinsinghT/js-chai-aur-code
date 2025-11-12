function addNumber(number1=2,number2=8){// in js no need to give type name, these are parameters
    // default value of number 1 is 2
    let result =number1+number2
    return result
}

// addNumber(3,4)//thse are arguments
// addNumber(3,"4")
// addNumber(3,"a")
// addNumber(3,null)


const result=addNumber()

console.log(result) // undefined...becuase we did not mentioned return

// if we dont pass the value in the parameter it will give undefined not null