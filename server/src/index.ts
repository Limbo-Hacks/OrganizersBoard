import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { AdminResolver } from "./resolvers/AdminResolver";
import express from "express";
import { HackerResolver } from "./resolvers/HackerResolver";
import dotenv from 'dotenv';

dotenv.config();

// Lambda Function
(async () => {
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  await createConnection();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AdminResolver, HackerResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  apolloServer.applyMiddleware({ app, cors: false });
  app.listen(4000, () => {
    console.log("Open localhost:4000/graphql for querying and mutating.");
  });
})();
