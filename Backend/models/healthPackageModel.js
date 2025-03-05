import mongoose from "mongoose";

const healthPackageSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        originalPrice: {
            type: Number,
            required: true,
        },
        discountedPrice: {
            type: Number,
            required: true,
        },
        remarks: {
            type: String,
            required: false,
            default: "",
        },
        description: {
            type: String,
            required: true,
        },  
    },
    { timestamps: true }
);

const healthPackageModel = mongoose.model.healthPackageModel || mongoose.model("HealthPackage",                 healthPackageSchema);

export default healthPackageModel;