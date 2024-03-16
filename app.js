// app.js
const express = require('express');
const app = express();
const commoditiesRoutes = require('./controllers/commodities.controllers');
const accountsRoutes = require('./controllers/accounts.controllers');
const transactionsRoutes = require('./controllers/transactions.controllers');

app.use(express.json());

app.use('/commodities', commoditiesRoutes);
app.use('/accounts', accountsRoutes);
app.use('/transactions', transactionsRoutes);


module.exports = app;
