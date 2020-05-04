import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const db_dev_url =
      process.env.NODE_ENV === "production"
        ? process.env.MONGODB_URI
        : process.env.DATABASE_URL_DEV;

    await mongoose.connect(db_dev_url, {
      keepAlive: true,
      keepAliveInitialDelay: 300000,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    console.log("MongoDB Connected!");
  } catch (err) {
    console.log(`db error ${err.message}`);
    process.exit(1);
  }
};

export default dbConnection;
