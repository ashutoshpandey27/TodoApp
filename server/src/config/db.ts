import mongoose from 'mongoose';

mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('error', (error) => console.error('MongoDB connection error:', error));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));

export  const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://jnuiteashutosh:9119%40Ias@cluster0.cydm6fw.mongodb.net/todoApp");
    } catch (error) {
       console.error('Error connecting to MongoDB', error);
       process.exit(1);
    }
   };

