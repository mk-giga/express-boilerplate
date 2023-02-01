// ### Project name: 
// ### Author: 
// ### Version: 1

const express = require('express');
const app = express();

function main() {
    init();
    listen();
}

function init() {
    app.use(express.static(__dirname + '/public/'));
}

function listen() {
    let port = 3000;
    let ip = '0.0.0.0';

    app.listen(port, ip, () => {
        console.log(`[🌟] Now listening on ${ip}:${port} ...`);
    });
}

/* let's go~ */
main();