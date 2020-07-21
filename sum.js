const normality = () => {
    return 'Working'
}
const sumOfThreeNumbers = (a, b, c) => {
    return a + b + c
}
const multiplyTwoNumbers = (a, b) => {
    return a * b
}
const sumThenMultiply = (a, b, c) => {
    return (a + b) * c
}
const power = (a, b) => {
    return Math.pow(a, b)
} 
const lowestNumber = (a, b, c, d, e) => {
    let numbers = [a, b, c, d, e]
    numbers.sort((a, b) => {
        return a - b
    })
    return numbers[0]
}
const closestInteger = (a) => {
    return Math.round(a)
}
const equation = (a, b, c) => {
    const delta = Math.pow(b, 2) - 4*a*c
    const bhas = (-b + Math.sqrt(delta))/2*a
    const kara = (-b - Math.sqrt(delta))/2*a
    return bhas + kara
}

module.exports = {
    normality,
    sumOfThreeNumbers,
    multiplyTwoNumbers,
    sumThenMultiply,
    power,
    lowestNumber,
    closestInteger,
    equation
}