const { assert } = require('chai');
const request = require('supertest');
const app = require('../../app')

describe('GET recipe 200', () => {
  it('Should answer with 200',  () => {
    return request(app.apiApp)
    .get('/recipe')
    .then(response => {
      assert.equal(response.statusCode,200);
      assert.equal(response.body.recipes[0].name,"Enchiladas");
    })
  });
});