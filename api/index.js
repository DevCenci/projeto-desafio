'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Setar headers pra nao dar erro Cors Origin 
// E integração de 2 apps ou APIs rodando no mesmo ambiente!!!! (FRONT/BACK) 

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const moneyTransactionRouter = require('./routes/money-transaction-route');

app.use('/money-transaction', moneyTransactionRouter);
//--------------------------

console.log("Servidor bombando porta: 3000");
app.listen(3000);

module.exports = app;  