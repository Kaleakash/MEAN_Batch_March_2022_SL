let mongoose = require("mongoose");

let url = "mongodb://mongo:27017/meanbatch4";

let dbConnection = mongoose.connect(url).then(res=>console.log("db connected")).
catch(error=>console.log("error "+error));

module.exports=dbConnection;