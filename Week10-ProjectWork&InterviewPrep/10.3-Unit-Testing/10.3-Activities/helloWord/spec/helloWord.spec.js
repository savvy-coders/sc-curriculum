const assert = require('assert');
const helloWorld = require('../helloWord.js');

describe("helloWorld()", function() {
    it("it should return Hello World", function(){
      expect(helloWorld()).toEqual('Hello World');
    });
  });