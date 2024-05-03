'use strict';

require('dotenv').config();
const supertest = require('supertest');
const { app } = require('../server.js');

const mockRequest = supertest(app);

const { db } = require('../models/index.model.js');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('API Server - Dogs', () => {

  it('should respond with a 404 on an invalid route', async () => {
    const response = await mockRequest.get('/no-thing');
    expect(response.status).toBe(404);
  });

  it('should respond with a 500 when errors are thrown', async () => {
    const response = await mockRequest.get('/broken');
    expect(response.status).toBe(500);
  });

  it('can add a dog record', async () => {
    const data = { dogName: "Buddy", dogBreed: "Golden Retriever", dogMood: "Joyful" };
    const response = await mockRequest.post('/dogs').send(data);
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.dogName).toBe('Buddy');
    expect(response.body.dogBreed).toBe('Golden Retriever');
  });

  it('can get a list of dog records', async () => {
    const response = await mockRequest.get('/dogs');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('dogName');
  });

  it('can get a dog record', async () => {
    const response = await mockRequest.get('/dogs/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('dogName');
    expect(response.body.dogName).toBeDefined();
  });

  it('can update a dog record', async () => {
    const data = { dogMood: "Relaxed" };
    const response = await mockRequest.put('/dogs/1').send(data);
    expect(response.status).toBe(200);
    expect(response.body.dogMood).toBe('Relaxed');
  });

  it('can delete a dog record', async () => {
    const postResponse = await mockRequest.post('/dogs').send({ dogName: "Coco", dogBreed: "Poodle", dogMood: "Playful" });
    const id = postResponse.body.id;

    const deleteResponse = await mockRequest.delete(`/dogs/${id}`);
    expect(deleteResponse.status).toBe(204);
    expect(deleteResponse.text).toBe('');
  });

});
