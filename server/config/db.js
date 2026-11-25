const mongoose = require('mongoose');

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  const ATLAS_FALLBACK_URI = 'mongodb+srv://nadex0210_db_user:rRGmeKKvwCyHYGps@hunar.fga6k3e.mongodb.net/hunar_studio?retryWrites=true&w=majority';
  const uri = process.env.MONGODB_URI || ATLAS_FALLBACK_URI;
  
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 15000,
      autoIndex: false,
    }).then((conn) => {
      console.log(`[MongoDB] Connected to database: ${conn.connection.name} @ ${conn.connection.host}`);
      return conn;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error(`[MongoDB] Connection error: ${error.message}`);
    // Do not crash server in dev mode or serverless if database is temporarily offline
    if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
      process.exit(1);
    }
  }
};

mongoose.connection.on('disconnected', () => {
  console.warn('[MongoDB] Disconnected from database.');
});

mongoose.connection.on('reconnected', () => {
  console.log('[MongoDB] Reconnected to database.');
});

module.exports = connectDB;
