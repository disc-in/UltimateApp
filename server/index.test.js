const esmRequire = require('esm')(module);
const { start } = esmRequire('./server');

const gql = require('graphql-tag');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { HttpLink } = require('apollo-link-http');

describe('Graphql server', function() {
  let server = null;
  afterAll(() => server && server.stop());

  it('has some drills', async function() {
    const started = await start();
    server = started.server;

    const client = new ApolloClient({
      // Provide required constructor fields
      cache: new InMemoryCache(),
      link: new HttpLink({ uri: started.url, fetch: require('node-fetch') }),
    });

    const result = await client.query({
      query: gql`
        query {
          drills {
            id
            title
          }
        }
      `,
    });

    expect(result.data.drills.length).toBeGreaterThan(3);
  });
});
