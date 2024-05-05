const DatabaseManager = require('./bd/mongodb/databaseManager');
const lastFile = require('./lastFile')

async function main() {
  const databaseManager = new DatabaseManager();
  await databaseManager.create();
  await lastFile();
}

main();