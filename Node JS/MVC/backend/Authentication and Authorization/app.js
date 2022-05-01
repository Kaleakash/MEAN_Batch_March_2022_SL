let express = require("express");
let userRouter = require("./router/userRouter");
let db = require("./config/dbConfig");


let port = 3000;

let app = express();

db.dbConnection;
app.use(express.json())
// http://localhost:3000/api/user
app.use("/api/user",userRouter);

app.listen(port,()=>console.log(`Server running on port number ${port}`));