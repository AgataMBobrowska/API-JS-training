const pactum = require('pactum');

describe('Users API Tests', () => {
  it('get all users', async () => {
    await pactum.spec()
      .get('https://jsonplaceholder.typicode.com/users')
      .expectStatus(200);
  });
});