const rewire = require("rewire")
const solution = rewire("../solution")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('1. Concatenation', () => {
    test('`introSentence` variable exists', () => {
        const introSentence = solution.__get__("introSentence")
        expect(introSentence).toBeDefined()
    })
    test('`introSentence` variable has string value', () => {
        const introSentence = solution.__get__("introSentence")
        expect(typeof introSentence).toBe('string')
    })
    test('`age` variable exists', () => {
        const age = solution.__get__("age")
        expect(age).toBeDefined();
    })
    test('`age` variable has number value', () => {
        const age = solution.__get__("age")
        expect(typeof age).toBe('number')
    })
    test('Variables `introSentence` and `age` are concatenated and logged', () => {
        const introSentence = solution.__get__("introSentence")
        const age = solution.__get__("age")
        const expectedOutputString = `${introSentence.trim()} ${age}`;
        require("../solution")
        const outputFound = consoleSpy.mock.calls.find(call => call.join(' ').includes(expectedOutputString))
        expect(outputFound).toBeTruthy();
    })
})
