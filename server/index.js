import express from 'express';
import 'dotenv/config';
import { graphqlHTTP } from 'express-graphql';
import colors from 'colors';
import cors from 'cors';

import { schema } from './schema/schema.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;

const app = express();

// connect to database
connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`🚀 Server running on port ${port}`));
