const request = require('supertest');
const apiApp = require('../../app').apiApp

describe('GET root 200', () => {
  it('Should answer with 200', () => {
    return request(apiApp)
      .get('/')
      .expect(200, );
  });
});

describe('GET login 200', () => {
  it('Should answer with 200', () => {
    return request(apiApp)
      .get('/login')
      .expect(200);
  });
});
