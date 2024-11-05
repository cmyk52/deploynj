import express, { json } from "express";
import cors from "cors";
import { router } from "./src/routes/movies.js";


const app = express();


const PORT = process.env.PORT || 3000;


//MIDDLEWARE

app.use(json());
app.use(cors());

//ROUTES



//get.routes
app.use("/movies", router);

//404.routes

app.use((req, res) => {
    return res.status(404).json({ error: "Route not found" });
})


//SERVER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})