import { asyncHandler } from "../utils/async-handler.js";
import {User} from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js"
import { ApiResponse } from "../utils/api-response.js"



const registerUser = asyncHandler(async (req, res) => {
    const {email, username, password} = req.body;
    
});

export {registerUser}
