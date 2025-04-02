import { asyncHandler } from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
    const {email, username, password} = req.body;
    registrationValidation(body)
});

export {registerUser}
