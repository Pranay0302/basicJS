const http = require('http');

http.Server((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(`<h3> sup fellas </h3>`);
    req.on('error', err => {
        console.error(err);
    })
    res.end();
    console.log(`statusCode: ${res.statusCode}, url: ${req.url}`);
}).listen(8080);