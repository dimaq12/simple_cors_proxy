const express = require('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors())
app.use('*',  proxy({ target: 'https://jobs.github.com', changeOrigin: true }))
let server = app.listen(5000);
