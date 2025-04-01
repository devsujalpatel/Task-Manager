import app from "./app.js";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 8000;

connectDb()
	.then(() => {
		app.listen(port, () => console.log("Server is listening at port", port));
	})
	.catch((err) => {
		console.log("dbconnect error", err);
		process.exit(1);
	});
