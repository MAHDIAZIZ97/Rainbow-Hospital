import mongoose from "mongoose";

const noticeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        file: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const noticeModel = mongoose.model.noticeModel || mongoose.model("Notice", noticeSchema);

export default noticeModel;