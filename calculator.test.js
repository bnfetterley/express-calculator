// const calculator = require("./calculator")

const functions = require ("./functions")

test('adds 1 + 2 to equal 3', () => {
    expect(functions.add(1, 2)).toBe(3);
  })


  test('subtracts 2 - 1 to equal 1', () => {
    expect(functions.subtract(2, 1)).toBe(1);
  })

// console.log(functions)