import app from "./app.js";


app.get('/', (req, res) => {
    res.send("Hello, from the server");
})