import mongoose, {Schema} from "mongoose";

const projectShema = new Schema({
    
}, {timestamps: true})

export const Project = mongoose.model("Project", projectShema)