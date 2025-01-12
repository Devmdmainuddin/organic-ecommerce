const { ServerApiVersion, MongoClient } = require("mongodb");

let db;
const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.MONGODB_URI; 
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
   
    db =await client.db("e-com");
    console.log('Connected to MongoDB');
    return db;

  } catch (error) {
console.log(error);
  }
};

export default connectDB;