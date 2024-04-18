const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: string,
    email: {
        type: string,
        required: true,
        index: true,
    },
    role: {
        type: string,
        default: "subscriber",
    },
    cart: {
        type: Array,
        default: [],
    },
    address: string,
    wishlist: [{ type: objectId, ref: "Product" }],
},
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);