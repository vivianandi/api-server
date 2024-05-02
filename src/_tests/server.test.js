'use strict';

const supertest = require('supertest');
const { server } = require('../src/server.js'); // Adjust path as necessary
const request = supertest(server);

describe('API Server', () => {

  it('should respond with a 404 status on an invalid route', async () => {
    const response = await request.get('/nope');
    expect(response.status).toBe(404);
  });

  it('should respond with a 404 status on an invalid method', async () => {
    const response = await request.post('/'); // Assuming POST is not allowed on the base route
    expect(response.status).toBe(404);
  });

  it('Can create a record using POST', async () => {
    const response = await request.post('/dogs').send({
      dogName: 'Baxter',
      dogBreed: 'Beagle',
      dogMood: 'Happy'
    });
    expect(response.status).toBe(201);
    expect(response.body.dogName).toEqual('Baxter');
  });

  it('Can read a list of records using GET', async () => {
    const response = await request.get('/dogs');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('Can read a record using GET', async () => {
    const response = await request.get('/dogs/1'); // Assuming ID 1 exists
    expect(response.status).toBe(200);
    expect(response.body.dogName).toBeDefined();
  });

  it('Can update a record using PUT', async () => {
    const response = await request.put('/dogs/1').send({ // Assuming ID 1 exists
      dogName: 'Max',
      dogMood: 'Sleepy'
    });
    expect(response.status).toBe(200);
    expect(response.body.dogMood).toEqual('Sleepy');
  });

  it('Can delete a record using DELETE', async () => {
    const response = await request.delete('/dogs/1'); // Assuming ID 1 exists and can be deleted
    expect(response.status).toBe(204);
  });

  // Add more tests as necessary for other routes and scenarios
});
