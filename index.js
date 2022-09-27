var http = require('http');

var fs = require('fs');


http.createServer((req, res) => {

    if (req.url == '/styles/main') {
        fs.readFile('pages/styles/sidenavbar.css', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/styles/pop-up') {
        fs.readFile('pages/styles/index.css', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/styles/grid') {
        fs.readFile('pages/styles/grid.css', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/images/a4.jpg') {
        console.log('Image Requested a4');
        fs.readFile('pages/images/a4.jpg', (err, data) => {
            res.writeHead(200, { 'content-type': 'image/*' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/images/a6.jpg') {
        console.log('Image Requested a4');
        fs.readFile('pages/images/a6.jpg', (err, data) => {
            res.writeHead(200, { 'content-type': 'image/*' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/grid') {
        fs.readFile('pages/html/grid.html', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/pop-up') {
        fs.readFile('pages/html/imagepopup.html', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('pages/html/sidenavbar.html', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
}).listen(8000);

