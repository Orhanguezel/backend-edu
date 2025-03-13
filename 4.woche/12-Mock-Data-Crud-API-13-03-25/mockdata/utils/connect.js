import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

export default async function connect() {

    const uri= process.env.MONGO_URI;
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

