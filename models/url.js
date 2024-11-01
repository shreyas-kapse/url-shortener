import mongoose from "mongoose"

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{ timeStamp: { type: Number } }],
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    }
}, { timestamps: true }
);

const URL = mongoose.model('url', urlSchema);

export default URL;