let express = require("express");
let dbConnect = require("./config/dbConfig");
let studentRouter = require("./router/studentRouter");
let cors = require("cors");

let app = express();
let port= 3000;

dbConnect.dbConnect();          // it will connect the database. 

// middleware 
app.use(express.json());            // it will enable to post data from request object. 
app.use(cors());                // Enable the cors origin policy engine. 

// http://localhost:3000/api/student/*

app.use("/api/student",studentRouter);


app.listen(port,console.log(`Server running on port number ${port}`));