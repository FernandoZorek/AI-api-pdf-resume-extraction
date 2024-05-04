const { MongoClient } = require('mongodb');

module.exports = (async (uri, dbName, collectionName) => { 
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await client.db(dbName).createCollection(collectionName);
        console.log('Database created successfully!');

    } catch (err) {
        console.error('Error creating database:', err);
    } finally {
        await client.close();
    }
})