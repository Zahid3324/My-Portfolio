import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI;

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cache: MongooseCache = global.mongooseCache ?? {
  connection: null,
  promise: null,
};

global.mongooseCache = cache;

export async function connectToDatabase() {
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (cache.connection) {
    return cache.connection;
  }

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(mongoUri, {
        serverSelectionTimeoutMS: 5000,
      })
      .catch((error: unknown) => {
        cache.promise = null;
        throw error;
      });
  }

  cache.connection = await cache.promise;
  return cache.connection;
}
