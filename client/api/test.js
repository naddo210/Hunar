import mongoose from 'mongoose';

const ATLAS_URI = process.env.MONGODB_URI || 'mongodb+srv://nadex0210_db_user:rRGmeKKvwCyHYGps@hunar.fga6k3e.mongodb.net/hunar_studio?retryWrites=true&w=majority';

export default async function handler(req, res) {
  try {
    const start = Date.now();
    await mongoose.connect(ATLAS_URI, {
      serverSelectionTimeoutMS: 5000,
      autoIndex: false,
    });
    const duration = Date.now() - start;
    return res.status(200).json({
      success: true,
      duration: `${duration}ms`,
      readyState: mongoose.connection.readyState,
      dbName: mongoose.connection.name,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      errorName: err.name,
      errorMessage: err.message,
    });
  }
}
