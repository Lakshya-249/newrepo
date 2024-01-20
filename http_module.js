const http = require("http");
const { resolve } = require("path");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Here is our home page...");
    }

    else if(req.url === "/about"){
        res.end("This is our short history...");
    }

    else{
        res.end(
            `<h1>Oops</h1>
            <p>Sorry cannot find your page...</p>
            <a href="/">GO BACK</a>`
        );
    }
})

server.listen(5000);