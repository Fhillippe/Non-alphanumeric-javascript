const binToDec = require('../binaryToDecimal')
const {describe, expect, test} = require('@jest/globals');

describe('Testing binary string to decimal number function', ()=>{
    test('Input 0 output expected to be 0',()=>{
        const input = '0'
        const expected = 0
        const result = $(input)

        expect(result).toBe(expected)
    })
    test('Input 10101 output expected to be 21',()=>{
        const input = '10101'
        const expected = 21
        const result = $(input)

        expect(result).toBe(expected)
    })
    test('Testing 20 random inputs',()=>{
        for(i=0; i<20; i++){
            const input = Math.floor(Math.random()*100).toString(2)
            const expected = parseInt(input, 2)
            const result = $(input)

            expect(result).toBe(expected)

        }
    })
})