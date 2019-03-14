const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('takes a string and integer as arguments', () => {
      expect(wrap(20,'something')).to.equal('error')
  });
  it('handles simple case', () => {
      const line = "abcdefghi"
      expect ( wrap(line,3)).to.equal('abc\ndef\nghi')
  })
  
});