const decToHex = require('../binaryToHex')
const {describe, expect, test} = require('@jest/globals');

describe('Testing binary string to hexadecimal string function', ()=>{
    test('Input 0000 output expected to be 0',()=>{
        const input = '0000'
        const expected = '0'
        const result = $(input)

        expect(result).toBe(expected)
    })
    test('Input 1111 output expected to be f',()=>{
        const input = '1111'
        const expected = 'f'
        const result = $(input)

        expect(result).toBe(expected)
    })
    test('Testing 20 random inputs',()=>{
        for(i=0; i<20; i++){
            let input = Math.floor(Math.random()*100).toString(2)
            //add leading zeros
            while(input.length%4){
                input = '0' + input
            }
            const expected = parseInt(input, 2).toString(16)
            const result = $(input)

            expect(result).toBe(expected)

        }
    })  
})