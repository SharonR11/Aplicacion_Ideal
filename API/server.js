import express from "express";
import cors from "cors";

const app = express();

var corOptions = {
    origin : 'https://localhost:8081'
    // origin : 'https://localhost:8081'
}
//middleware
app.use(cors(corOptions));  //
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//
app.get( "/", (req, res) =>{
    res.json({ message: "Welcome to the API"})
})
const PORT  = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})