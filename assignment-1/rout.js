const fs = require("fs");

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('</html>');
        res.write('<body><h1>This is Assignment 1</h1><form action="/create-user" method="POST"><input type="text" name="User-Name"><button type="submit">Submit Data</button></form></body>'); 
        return res.end();    
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/create-user" && method === "POST"){
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFileSync('user.txt', user,() => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            
        });
    }
    res.setHeader('Conteny-Type','text/html');
    res.write('<html>')
    res.write('<body><h1>Hello from Node.js Server</h1></body>')
    res.write('</html>')
     res.end();
};
module.exports=requestHandler;