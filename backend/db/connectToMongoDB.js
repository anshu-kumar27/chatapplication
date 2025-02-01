import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		let dbUrl = process?.env?.MONGO_DB_URI ?? "mongodb://localhost:27017/chatApplication";
		await mongoose.connect(dbUrl);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
