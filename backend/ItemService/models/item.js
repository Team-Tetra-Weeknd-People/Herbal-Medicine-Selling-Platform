import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    sellerID: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    stocks: {
        type: Number,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'createdOn',
        updatedAt: 'updatedOn'
    }
});

const Item = mongoose.model("Item", ItemSchema);

export default Item;