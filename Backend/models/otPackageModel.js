import mongoose from "mongoose";

const otPackageSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        remarks: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

const otPackageModel = mongoose.model.otPackageModel || mongoose.model("OtPackage", otPackageSchema);

export default otPackageModel;