const request = require('supertest');
const clientApp = require('../../app').clientApp

describe('GET root 200 Client', () => {
  it('Should answer with 200', () => {
    return request(clientApp)
      .get('/')
      .expect(200, );
  });
});
