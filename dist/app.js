function evaluateExpression(operandsAndOperators) {
    if (operandsAndOperators[0] != '') {
        let expression = operandsAndOperators[0] + operandsAndOperators[1] + operandsAndOperators[2]
        let evaluatedExpression = eval(expression)
        let evaluatedExpressionStr = evaluatedExpression + ''

        const expressionSpace = document.querySelector('#expression')
        if (evaluatedExpressionStr.length <= 9) {
            expressionSpace.innerText = evaluatedExpression
        } else if (evaluatedExpressionStr.includes('e')) {
            let restOfExpression = evaluatedExpressionStr.substring(0, evaluatedExpressionStr.indexOf('e'))
            let exponent = evaluatedExpressionStr.substring(evaluatedExpressionStr.indexOf('e'))
            // console.log(exponent)
            while (9 < (restOfExpression.length + exponent.length)) {
                restOfExpression = restOfExpression.slice(0, -1)
            }
            expressionSpace.innerText = restOfExpression + exponent

        } else {
            expressionSpace.innerText = evaluatedExpressionStr.substring(0, 9)
        }
        // console.log(eval(expression))

    }
}

// console.log(eval('0.0066666/9999'))
// console.log(eval('900000 / 400000000000000'))

// const division = document.querySelector('#/')
const nums = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.operator')
// const one = document.querySelector('#1')
// const two = document.querySelector('#2')
// const three = document.querySelector('#3')
// const four = document.querySelector('#4')
// const five = document.querySelector('#5')
// const six = document.querySelector('#6')
// const seven = document.querySelector('#7')
// const eight = document.querySelector('#8')
// const nine = document.querySelector('#9')
// const zero = document.querySelector('#0')
// const dot = document.querySelector('#.')
// const multiply = document.querySelector('#*')
// const plus = document.querySelector('#+')
// const minus = document.querySelector('#-')
// const equals = document.querySelector('#=')
const operandsAndOperators = []
// function numToSpan() {
//     const expression = document.querySelector('#expression')
//     // expression.value = val

// }

for (let num of nums) {
    num.addEventListener('click', function () {
        const expression = document.querySelector('#expression')
        if (expression.innerText.length < 4) {
            expression.innerText += num.innerText
        }

        // expression.value = valß
    })
}

for (let operator of operators) {
    operator.addEventListener('click', function () {
        const expression = document.querySelector('#expression')
        let operandOne = expression.innerText
        operandsAndOperators.length = 0
        operandsAndOperators.push(operandOne)
        operandsAndOperators.push(this.innerText)
        console.log(operandsAndOperators[0])
        console.log(operandsAndOperators[1])
        expression.innerText = ''
        // for (let num of nums) {
        //     num.addEventListener('click', function () {
        //         const expression = document.querySelector('#expression')
        //         if (expression.innerText.length < 4) {
        //             expression.innerText += num.innerText
        //         }

        //         // expression.value = valß
        //     })
        // }


        // expression.value = valß
    })
}

const equals = document.querySelector('#equals')
equals.addEventListener('click', function () {
    let operandTwo = expression.innerText
    operandsAndOperators.push(operandTwo)
    expression.innerText = ''
    evaluateExpression(operandsAndOperators)
    console.log(operandsAndOperators[0])
    console.log(operandsAndOperators[1])
    console.log(operandsAndOperators[2])
})

const dot = document.querySelector('#dot')
dot.addEventListener('click', function () {
    const expressionSpace = document.querySelector('#expression')
    if (!(expressionSpace.innerText.includes('.'))) {
        expressionSpace.innerText += '.'

    }

})

const del = document.querySelector('#DEL')
del.addEventListener('click', function () {

    const expressionSpace = document.querySelector('#expression')
    if (1 <= expressionSpace.innerText.length) {
        expressionSpace.innerText = expressionSpace.innerText.slice(0, -1)
    }
})

const ac = document.querySelector('#AC')
ac.addEventListener('click', function () {
    operandsAndOperators.length = 0
    const expressionSpace = document.querySelector('#expression')
    expressionSpace.innerText = ''


})

