import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  
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

    const Seller = mongoose.model('Seller', sellerSchema);
    export default Seller;