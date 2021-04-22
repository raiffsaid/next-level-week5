import express from 'express'; 
import "./database";

const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "Hello World"});
});

app.post("/users", (req, res) => {
    return res.json({ message: "User saved!"});
});

app.listen(3333, () => console.log("Server running on port 3333"));