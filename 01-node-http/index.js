/**
 * TODO
 * Create a simple REST service here with most of the HTTP methods
 */

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const fs = require('fs');
const path = require('path');

var filePath = path.resolve('./public/index.html');

fs.exists(filePath, (exists) => {
  console.log('Exists:', exists);
});

console.log('...');




const server = http.createServer((req, res) => {
  console.log(req.headers);

  if (req.method === 'PUT') {
    console.log('It was put');
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello</h1>');

});

server.listen(port, hostname, () => {
  console.log(`Server`);
});








// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   console.log('Request for ' + req.url + ' by method ' + req.method);

//   if (req.method == 'GET') {
//     var fileUrl;
//     if (req.url == '/') fileUrl = '/index.html';
//     else fileUrl = req.url;

//     var filePath = path.resolve('./public'+fileUrl);
//     const fileExt = path.extname(filePath);
//     if (fileExt == '.html') {
//       fs.exists(filePath, (exists) => {
//         if (!exists) {
//           res.statusCode = 404;
//           res.setHeader('Content-Type', 'text/html');
//           res.end('<html><body><h1>Error 404: ' + fileUrl + 
//                       ' not found</h1></body></html>');
//           return;
//         }
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         fs.createReadStream(filePath).pipe(res);
//       });
//     }
//     else {
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/html');
//       res.end('<html><body><h1>Error 404: ' + fileUrl + 
//               ' not a HTML file</h1></body></html>');
//     }
//   }
//   else {
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/html');
//       res.end('<html><body><h1>Error 404: ' + req.method + 
//               ' not supported</h1></body></html>');
//   }
// });