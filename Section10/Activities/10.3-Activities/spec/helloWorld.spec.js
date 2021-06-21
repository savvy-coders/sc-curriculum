const assert = require('assert');
const helloWorld = require("../helloWorld");

describe("helloWorld()", function() {
  //act
  let greeting = 'Hello World';

  //arrange
  let result = helloWorld;

  //assert
  it("it should return - Hello World", function(){
    expect(result).toEqual(greeting);
  });
});
