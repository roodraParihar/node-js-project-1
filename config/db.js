import mongoose from "mongoose";
import colors from "colors"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to the mongodb database ${mongoose.connection.host}`.bgWhite.bgBlue)

        
    } catch (error) {
        console.log(`mongodb error ${error}`)
        
    }
};

export default connectDB;