import * as assert from 'assert';

describe('Basic Mocha String Test', () => {
  it('should return number of characters in a string', () => {
    assert.equal('Hello'.length, 5);
  });
  it('should return first characters of the string', () => {
    assert.equal('Hello'.charAt(0), 'H');
  });
});
