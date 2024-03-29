import supertest from 'supertest';
import app from '../index';
import { processImage } from '../controllers/imageController';
import { router } from '../routes/imageRouter';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
});

it('tests the Image processing', async () => {
  const result = await processImage('palmtunnel', '400', '500');
  expect(result).toBeTruthy()
});


describe("Test endpoint responses", () => {
  it("gets the api image resized endpoint", async () => {
    const response = await request.get(
      "/api/images?filename=palmtunnel&width=400&height=440"
    );
    expect(response.status).toBe(200);
  });
});
