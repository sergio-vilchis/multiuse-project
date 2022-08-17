const { assert } = require('chai');
const mocha = require('mocha');
const app = require('../app')
const dotenv = require('dotenv')

before(done => {
  process.env.NODE_ENV='testing'
  app.initServer
  setTimeout(function() {
    done();
  }, 5000);
});

describe('Validate Server', () => {
  it('Should be true',  () => {
     assert.notEqual(app.apiApp, undefined);
     assert.notEqual(app.clientApp, undefined);
   })
});