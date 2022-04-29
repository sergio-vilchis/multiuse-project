let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('GET root 200',()=>{
  it('Should answer at / in port 3000', (done) => {
  chai.request(url)
  .get('/')
  .end( function(err,res){
  console.log(res.body)
  expect(res).to.have.status(200);
  done();
  });
  });
 });

 describe('GET login 200',()=>{
  it('Should answer at /login in port 3000', (done) => {
  chai.request(url)
  .get('/login')
  .end( function(err,res){
  console.log(res.body)
  expect(res).to.have.status(200);
  done();
  });
  });
 });