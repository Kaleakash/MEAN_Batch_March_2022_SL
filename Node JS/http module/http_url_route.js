let http = require("http");
let url = require("url");
let indexPage =`
                    <html>
                    <head>

                    </head>
                    <body>
                        <h2>Welcome to My Simple Web Application</h2>
                        <a href="aboutus">About Us Page</a>|
                        <a href="contactus">Contact Us</a>|
                        <a href="login">Login Page</a>|
                    </body>

                    </html>
    `

let loginPage =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="checkUser">
        <label>EmailId</label>
        <input type="email" name="email"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
    </form>
</body>
</html>

`
let server = http.createServer((req,res)=> {
        let urlRef = url.parse(req.url,true);
        res.setHeader("Content-Type","text/html");
        if(urlRef.pathname=="/aboutus"){
            //res.end("About Us Page")
            res.write("<h2>About Us Page</h2>")         // it is string or text consider 
            res.write("<p>About Us Page Description</p>")
        }else if(urlRef.pathname=="/contactus"){
            //res.end("Contact Us Page")
            res.write("<h2>Contact Us Page</h2>")
            res.write("<p>Contact Us Page Description</p>")
        }else if(urlRef.pathname=="/login"){
            //res.end("Login Page")
            //res.write("<h2>Login Page</h2>")
            //res.write("<p>Login Page Description</p>")
            res.write(loginPage);
            /*
                another if statement to store the data in file. 
                to create the account. email id must be unique. 

            */
        }else if(urlRef.pathname=="/checkUser") {
                   let login= urlRef.query;
                   // we can read the value from file login.json 
                   // then we check
                    if(login.email=="raj@gmail.com" && login.pass=="123"){
                            res.write("<h2>Successfully login</h2>");
                    }else {
                            res.write("<h2>Failure try once again</h2>");
                    }
        }else {
            res.write(indexPage);
        }
        res.end();
})

server.listen(3000,()=>console.log("server running on port number 3000"))