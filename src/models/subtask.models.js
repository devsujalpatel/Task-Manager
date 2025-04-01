import mongoose, {Schema} from "mongoose";

const subTaskSchema = new Schema({
    
}, {timestamps: true})

export const subTask = mongoose.model("subTask", subTaskSchema)