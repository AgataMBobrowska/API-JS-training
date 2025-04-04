const pactum = require('pactum');
const request = pactum.request;
request.setBaseUrl('https://jsonplaceholder.typicode.com');

describe('Create new user', () => {
  it('Post new user', async () => {
    const postRequestBody = {
            "id": 11,
            "name": "Anne Graham",
            "username": "annegra",
            "email": "annegraham@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hannegraham.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          };
    await pactum.spec()
      .post('/users')
      .withJson(postRequestBody)
      .expectStatus(201);
  });
});