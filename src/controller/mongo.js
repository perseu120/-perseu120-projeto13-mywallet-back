import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.URI_MONGO);

await mongoClient.connect();

const db = mongoClient.db("oscar-niemeyer");
export default db;