import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config("./.env");

const port = process.env.PORT || 8000;




app.listen(port, () => {
    console.log("Server is listening at port", port);
})

export default app;
