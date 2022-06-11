let express = require("express");
let db = require("./config/dbConfig");
let studentRouter = require("./router/studentRouter");

let app = express();
let port = 3000;

app.use(express.json());        // Enable the post data 

db.dbConnection;        // call the reference to connect 


// http://localhost:3000/api/student/*

app.use("/api/student",studentRouter);

app.listen(port,()=>console.log(`Server running on port number ${port}`));