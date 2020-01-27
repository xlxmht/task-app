const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

server.listen(4000, function() {
    console.log('Server started at 4000');
});