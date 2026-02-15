import mongoose, { Mongoose } from "mongoose";

/**
 * MongoDB connection URI from environment variables.
 * Throws an error if not defined to prevent runtime issues.
 */
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Type definition for the cached mongoose connection.
 * - conn: The active Mongoose connection instance
 * - promise: The pending connection promise (used to prevent race conditions)
 */
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

/**
 * Declare a global variable to cache the connection across hot reloads in development.
 * This prevents creating multiple connections when Next.js hot-reloads the module.
 */
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

// Initialize or reuse the cached connection object
const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };

// Persist the cache in global scope for development hot reloads
if (process.env.NODE_ENV !== "production") {
  global.mongoose = cached;
}

/**
 * Establishes a connection to MongoDB using Mongoose.
 * Returns the cached connection if available, otherwise creates a new one.
 *
 * @returns Promise resolving to the Mongoose instance
 */
async function dbConnect(): Promise<Mongoose> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // If no pending connection promise, create one
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false, // Disable buffering for faster error detection
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  // Await the connection and cache it
  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;
