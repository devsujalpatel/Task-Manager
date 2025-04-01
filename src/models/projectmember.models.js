import mongoose, {Schema} from "mongoose";

const projectMemberSchema = new Schema({
    
}, {timestamps: true})

export const projectMember = mongoose.model("projectMember", projectMemberSchema)