const http = require('http');

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res)=>{
    console.log("Request to: " + req.url);

    res.statusCode = 200;
    res.setHeader("content-Type", "text/html");
    res.end("<h1>Welcome to Node server using HTTP_Module</h1>");
});

server.listen(port, hostname, ()=>{
    console.log(`Server is running at : http://${hostname}:${port}`);
});