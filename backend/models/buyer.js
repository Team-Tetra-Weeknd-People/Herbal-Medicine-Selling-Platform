import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const buyerSchema = new Schema({
  
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    contactNo: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    image: {
        type: String,
        
    }

    });

    const Buyer = mongoose.model('Buyer', buyerSchema);
    export default Buyer;