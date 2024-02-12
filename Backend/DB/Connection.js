import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017', {
    family: 4
})

mongoose.connection.on('connected', () => {
    console.log('connected successfully');
})

mongoose.connection.on('error', (error) => {
    console.log(error);
})