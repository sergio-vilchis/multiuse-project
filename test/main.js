var expect    = require("chai").expect;
var main = require("../main");

describe("Main", function() {
  describe("First test", function() {
    it("add two numbers", function() {
         var n1 = 1;
         var n2= 2;
         var result = main.addNumbers(n1,n2);
         expect(result).to.equal(3);
    });
  });
});