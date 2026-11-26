const mongoose = require('mongoose');

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, lastFailedAt: 0 };
}

if (!global.__hunarDbState) {
  global.__hunarDbState = { status: 'initializing', error: null };
}

const RECONNECT_COOLDOWN_MS = 15000;

/**
 * Connect to MongoDB with serverless caching, non-crashing offline resilience,
 * and a reconnect cooldown so Render/Vercel health checks never stall.
 */
const connectDB = async () => {
  if (cached.conn && mongoose.connection.readyState === 1) {
    global.__hunarDbState = { status: 'connected', error: null };
    return cached.conn;
  }

  // Throttle repeated attempts while Atlas IP whitelist or network is unreachable
  if (cached.lastFailedAt && Date.now() - cached.lastFailedAt < RECONNECT_COOLDOWN_MS) {
    return null;
  }

  const ATLAS_FALLBACK_URI = 'mongodb+srv://nadex0210_db_user:rRGmeKKvwCyHYGps@hunar.fga6k3e.mongodb.net/hunar_studio?retryWrites=true&w=majority';
  const uri = process.env.MONGODB_URI || ATLAS_FALLBACK_URI;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      autoIndex: false,
    }).then((conn) => {
      cached.lastFailedAt = 0;
      global.__hunarDbState = { status: 'connected', error: null };
      console.log(`[MongoDB] Connected to database: ${conn.connection.name} @ ${conn.connection.host}`);
      return conn;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    cached.lastFailedAt = Date.now();
    const isWhitelistIssue = /whitelist|ServerSelectionError|timed out|ENOTFOUND/i.test(error.message);
    global.__hunarDbState = {
      status: 'disconnected',
      error: isWhitelistIssue ? 'atlas_ip_not_whitelisted' : 'connection_failed',
    };
    console.error(`[MongoDB] Connection error: ${error.message}`);
    if (isWhitelistIssue) {
      console.warn('[MongoDB Hint] Ensure 0.0.0.0/0 is added in MongoDB Atlas -> Security -> Network Access.');
    }
    return null;
  }
};

mongoose.connection.on('disconnected', () => {
  global.__hunarDbState = { status: 'disconnected', error: null };
  console.warn('[MongoDB] Disconnected from database.');
});

mongoose.connection.on('reconnected', () => {
  global.__hunarDbState = { status: 'connected', error: null };
  console.log('[MongoDB] Reconnected to database.');
});

module.exports = connectDB;
