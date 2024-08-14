import request from 'supertest';
const app = require('./app');

describe('Test the root path', () => {
  it('should respond with "Hello, World!" on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});

describe('Test the /about path', () => {
  it('should respond with a message on GET /about', async () => {
    const response = await request(app).get('/about');
    expect(response.status).toBe(200);
    expect(response.text).toBe('This is a basic Node.js application using Express.');
  });
});

describe('Test the /data path', () => {
  it('should respond with the sent data on POST /data', async () => {
    const testData = { key: 'value' };
    const response = await request(app).post('/data').send(testData);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`You sent: ${JSON.stringify(testData)}`);
  });
});
