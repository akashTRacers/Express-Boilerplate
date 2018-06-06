/* dbManager - wrapper over node-mongodb driver */

const logger=require('./logger');

var dbManager = () => {
  const log = logger;

  console.log("inside dbmanager function");
  // Connection
  const pe = process.env;
  // use a cloud-hosted mongo db, such as mlab.com
  //const url = `mongodb://${pe.user}:${pe.password}@${pe.db_host}:${pe.db_port}/${pe.db_name}`;
 const url= 'mongodb://localhost:27017/beginnerbook';

  let db = null;
  let collection = null;
  const adminDb = null;

  // connect to db
  const connect = () =>
    require('mongodb').MongoClient.connect(url, {
      poolSize: 20,
    }) // default poolsize = 5
      .then((dbInst) => {
        log.info(`Connected to mongodb at ${url}`);
        // get db, collection
        db = dbInst;
        // get existing collection, or create if doesn't exist
      
        collection = db.collection('beginnerbook');
      }).catch(err => log.error(err));

  // Mongo's UPSERT operation
  const upsert = doc =>
    // Update the document using an UPSERT operation, ensuring creation if it does not exist
    // does not change "_id" value
    collection.updateOne(
      { 

      },
      doc, // use {$set: ...} to set just one field
      {
        upsert: true,
      },
    )
      .then(res => log.debug(`Inserted ${doc.title}`, res));


  const close = () => db.close()
    .then(() => log.info('DB closed successfully.'));

  return {
    close,
    connect,
    upsert,
  };
};

module.exports = dbManager;
