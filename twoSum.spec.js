const {expect} = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
    const result = twoSum([1,2,3],5)
    it( 'expects an array as return type', ()   => {
        expect (Array.isArray(result)).to.equal(true)
    });
    it( 'expects array of length 2', () => {
        expect( result.length).to.equal(2)
    });
});

