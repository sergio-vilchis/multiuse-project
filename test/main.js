const request = require('supertest');
const app = require('../main')

describe('GET root 200', () => {
  it('Should answer with 200', () => {
    return request(app)
      .get('/')
      .expect(200, );
  });
});

describe('GET login 200', () => {
  it('Should answer with 200', () => {
    return request(app)
      .get('/login')
      .expect(200);
  });
});
