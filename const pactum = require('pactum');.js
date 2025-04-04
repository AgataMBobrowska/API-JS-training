const pactum = require('pactum');

it('should return a successful response', async () => {
  await pactum.spec()
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .expectStatus(200)
    .expectJsonLike({
      id: 1,
      title: /.+/
    });
    
});
