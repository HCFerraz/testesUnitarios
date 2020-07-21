const {normality, sumOfThreeNumbers, multiplyTwoNumbers, sumThenMultiply, power, lowestNumber, closestInteger, equation} = require('./sum');
const { TestScheduler } = require('jest');

test('test normality', () => {
    expect(normality()).toBe('Working')
})
test('sum', () => {
    expect(sumOfThreeNumbers(1, 2, 3)).toBe(6)
})
test('multiply', () => {
    expect(multiplyTwoNumbers(2, 5)).toBe(10)
})
test('sum then multiply', () => {
    expect(sumThenMultiply(2, 2, 5)).toBe(20)
})
test('power', () => {
    expect(power(2, 5)).toBe(32)
})
test('lowest number', () => {
    expect(lowestNumber(5, 8, 9, 2, 3)).toBe(2)
})
test('closest integer', () => {
    expect(closestInteger(7.43)).toBe(7)
})
test('bhaskara formula', () => {
    expect(equation(1, 5, 4)).toBe(-5);
}) 