import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("Mongo is connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/rhds`);
}

export default connectDB;