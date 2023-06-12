import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to mongoDb')
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default dbConnect;