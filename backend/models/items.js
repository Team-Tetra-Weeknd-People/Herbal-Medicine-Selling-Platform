import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({ 
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
});

const Item = mongoose.model("Item", ItemSchema);

export default Item;