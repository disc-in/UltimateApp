const { ApolloServer, gql } = require('apollo-server');
const { MongoDataSource } = require('apollo-datasource-mongodb');
const { readFileSync } = require('fs');
const { resolve } = require('path');

// The GraphQL schema
const typeDefs = gql(readFileSync(resolve(__dirname, './schema.graphql'), 'utf8'));

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost/test';
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect();

class DrillsDataSource extends MongoDataSource {
  constructor() {
    super(client.db().collection('drills'));
  }

  fixId(drillObject) {
    return { steps: [], ...drillObject, id: drillObject._id, _id: undefined };
  }

  async listAllDrills() {
    return (await this.collection.find().toArray()).map(this.fixId);
  }

  async getOneDrill(drillId) {
    return this.fixId(await this.findOneById(drillId));
  }

  async createDrill(drill) {
    const id = (await this.collection.insertOne(drill)).insertedId;
    return { ...drill, id };
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      drills: (parent, args, { dataSources }) => dataSources.drills.listAllDrills(),
      drill: (parent, { id }, { dataSources }, info) => dataSources.drills.getOneDrill(id),
    },
    Mutation: {
      createDrill: (parent, { drill }, { dataSources }, info) => dataSources.drills.createDrill(drill),
    },
  },
  dataSources: () => ({
    drills: new DrillsDataSource(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
