import mongoose from 'mongoose';

// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL, () => {
//   console.log("Connected to MongoDB");
// });

const conectarDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const db = await mongoose.connect(process.env.MONGO_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `${db.connection.host}: ${db.connection.port}`
        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;