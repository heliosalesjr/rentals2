import mongoose from 'mongoose';

let connected = false;

const connectBD = async () => {
    mongoose.set('strictQuery', true);

    if (connected) {
        console.log('MongoDB is connected!');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true
        console.log('MongoDB connected now!');
    } catch (error) {
        console.log('Error connecting to MongoDB');
    }
}

export default connectBD;