
/*
Math testing
describe('Math', () => {
    describe('.max', () => {
      it('returns the argument with the highest value', () => {
        // Your test goes here
      });
      it('returns -Infinity when no arguments are provided', () => {
        // Your test goes here
      });
    });
  });
  npm test
  */
 /*
  const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  // Write hooks above the tests
  before(() => {
    path = './message.txt'
    
  });
   afterEach(() => {
    fs.unlinkSync(path);
    
  });

  it('writes a string to text file at given path name', () => {
 
   // Setup
  
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   
 
 });
 
 it('writes an empty string to text file at given path name', () => {
 
   // Setup
  
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   
  
 });
});
*/
/*index.html
Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;
*/
const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('return a rooster call', () => {
      //setup
      const expected = 'cock-a-doodle-doo!';

      //Excercise
      const actual = Rooster.announceDawn();

      //Verify
      assert.equal(actual, expected);
    });
  });
   describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {

      const inputNumber = 12;
      const expected = '12';

      const actual = Rooster.timeAtDawn(inputNumber);
      assert.equal(actual, expected);

    });
  });
  describe('.timeAtDawn', () => {
    it('throws an error if passed a number less than 0', () => {

      const inputNumber = -1;
      const expected = RangeError;

      
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber)

      }, expected);

    });
  });
  describe('.timeAtDawn', () => {
    it('throws an error if passed a number greater than 23', () => {

      const inputNumber = 24;
      const expected = RangeError;

      
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber)

      }, expected);

    });
  });
  
  
  
});

 