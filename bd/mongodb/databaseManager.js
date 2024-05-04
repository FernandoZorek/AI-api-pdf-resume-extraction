const { MongoClient } = require('mongodb');
const createDatabase = require('./createDatabase');

const dbUrl = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const collectionName = process.env.DB_COLLECTION;
const usernameRoot = process.env.DB_ROOT_USERNAME;
const passwordRoot = process.env.DB_ROOT_PASSWORD;

class DatabaseManager {
  constructor() {
    this.uri = `mongodb://${usernameRoot}:${passwordRoot}@${dbUrl}`;
    this.client = new MongoClient(this.uri);
  }

  async create() {
    try {
      await createDatabase(this.uri, dbName, collectionName)
    } catch (err) {
        console.error('Error creating database:', err);
    }
  }
  
  async save(data) {
    
    await this.client.connect();
    const db =  this.client.db(dbName);
    const collection = db.collection(collectionName);
  
    try {
      await collection.insertOne(data);
      console.log('Resume data saved!');
    } catch (err) {
      console.error('Error saving resume data:', err);
    } finally {
      await this.disconnect();
    }
  }

  async disconnect() {
    await this.client.close();
  }
}

module.exports = DatabaseManager;
