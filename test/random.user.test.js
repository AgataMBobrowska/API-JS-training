const { spec } = require('pactum');
const { like } = require('pactum-matchers');

describe('Random User API Test', () => {
  it('should match the expected JSON structure', async () => {
    await spec()
      .get('https://randomuser.me/api')
      .expectJsonMatch({
        "results": [
          {
            "gender": like("male"),
            "name": {
              "first": like("Amira"),
            },
            "dob": like({
              "date": "1949-02-09T12:49:15.975Z",
              "age": 67
            })
          }
        ]
      });
  });
});