import { ApolloServer, gql } from 'apollo-server';
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { MongoClient } from 'mongodb';

import fixtures from '../src/Fixtures/index.js';

// The GraphQL schema
const typeDefs = gql(readFileSync(resolve(__dirname, './schema.graphql'), 'utf8'));

const DRILL_COLLECTION = 'drills';

const client = new MongoClient('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class DrillsDataSource extends MongoDataSource {
  constructor() {
    super(client.db().collection(DRILL_COLLECTION));
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
  rewriteError: x => {
    console.log(x);
    return x;
  },
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

export async function start() {
  console.log(`🥭 Connecting to mango`);
  await client.connect();
  const db = client.db();
  const collection = db.collection(DRILL_COLLECTION);
  const existing = await db.listCollections({ name: DRILL_COLLECTION }).toArray();
  if (existing.length > 0) {
    console.log(`🗑 Cleaning up the database`);
    await collection.drop();
  }
  console.log(`📁 Creating fixtures`);
  await collection.insertMany(fixtures.drills);
  console.log(`⚙️\uFE0F Starting server`);
  const { url, server: httpServer } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
  httpServer.addListener('close', () => client.close());
  return { url, server };
}
