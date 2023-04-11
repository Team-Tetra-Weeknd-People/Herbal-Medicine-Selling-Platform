import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
        required: true,
        unique: true,
    },

    contactNo: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: false
    },

    password: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: false
    },

    token: {
        type: Number,
        required: false,
        default: Math.floor(Math.random() * 1000000)
    },

    resetToken: {
        type: Number,
        required: false,
        default: 0
    },

    verified: {
        type: Boolean,
        required: false,
        default: false
    }
    
}, {
    timestamps: {
        createdAt: 'createdOn',
        updatedAt: 'updatedOn'
    }
});

buyerSchema.pre("save", async function (next) {
	const user = this;
	const password = user.password;

	if (!user.isModified("password")) {
		return next();
	}

	// Number of rounds hash function will execute
	const salt = await bcrypt.genSalt(10);

	const hash = bcrypt.hashSync(password, salt);
	user.password = hash;
	return next();
});

const Buyer = mongoose.model('Buyer', buyerSchema);
export default Buyer;