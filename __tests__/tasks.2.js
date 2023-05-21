const rewire = require("rewire")
const solution = rewire("../solution")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('2. Converting', () => {
    test('`integer` variable exist', () => {
        const integer = solution.__get__("integer")
        expect(integer).toBeDefined()
    })
    test('`integer` variable has string value', () => {
        const integer = solution.__get__("integer")
        expect(integer).toMatch('1005')
    })

    test('Variable `integer` is converted to Number and logged', () => {
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(parseInt('1005'));
    })
    test('`float` variable exists', () => {
        const float = solution.__get__("float")
        expect(float).toBeDefined()
    })
    test('`float` variable exists and has string value', () => {
        const float = solution.__get__("float")
        expect(float).toMatch('10.05')
    })

    test('Variable `float` is converted to Number and logged', () => {
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(parseFloat("10.05"));
    })
})
