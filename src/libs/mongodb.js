//usamos mogoDB  client - driver para conectarnos a la base de datos

import mongoose from "mongoose";

export async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URL);
} 