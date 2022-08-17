const { assert } = require('chai');
const request = require('supertest');
const app = require('../../app')

describe('GET root 200 Client', () => {
  it('Should answer with 200',  () => {
     return request(app.clientApp)
      .get('/')
      .then(response => {
        assert.equal(response.statusCode,200);
      })
   })
});
