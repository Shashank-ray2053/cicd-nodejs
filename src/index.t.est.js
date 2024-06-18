const request = require('supertest');
const http = require('http');
const app = require('./index');

describe('GET /', () => {
  it('should return Hello World', async () => {
    const server = http.createServer(app);
    const response = await request(server).get('/');
    expect(response.text).toBe('Hello World\n');
    server.close();
  });
});
