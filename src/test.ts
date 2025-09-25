import request from 'supertest';
import {app} from './server';

describe('API Endpoints', () => {
  it('should return 200 for post /createUser', async () => {
    const data =  {
      name: "fake",
      email: "fake@gmail.com",
      password: '123456',
      phone: '111111111',
    };

    const res = await request(app).post('/createUser').send(data).set('Accept', 'application/json');
    expect(res.statusCode).toBe(200);
  });

  it('should return 200 for get /getData', async () => {
    const data =  {
      email: "First@gmail.com",
    };

    const res = await request(app).get('/getData').send(data).set('Accept', 'application/json');
    expect(res.statusCode).toBe(200);
  });

  
});