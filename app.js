const express = require('express');
const app = express();
router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

// Import your accountsController
const accountsController = require('./controllers/accounts.controllers');
const transactionsController = require('./controllers/transactions.controllers');
const commoditiesController = require('./controllers/commodities.controllers');

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(accountsController);
app.use(transactionsController);
app.use(commoditiesController);

app.use('/404', (req, res) => {
  res.status(404).send('404: Page not found');
});

// Route to get all accounts
app.get('/accounts', accountsController);
app.get('/transactions', transactionsController);
app.get('/commodities', commoditiesController);

app.get('/' , (req, res) => {
  res.send('Hello World!')
});


  //Route to get an account by ID
app.get('/accounts/:accountId', accountsController)
app.get('/transactions/:transactionId', transactionsController)
app.get('/commodities/:transactionId', commoditiesController)

// Route to create a new account
app.post('/accounts', accountsController);
app.post('/transactions', transactionsController);
app.post('/commodities', commoditiesController);

// Route to update an account by ID
app.put('/accounts/:accountId', accountsController);
app.put('/transactions/:transactionId', transactionsController);
app.put('/commodities/:transactionId', commoditiesController);

// Route to delete an account by ID
app.delete('/accounts/:accountId', accountsController);
app.delete('/transactions/:transactionId', transactionsController);
app.delete('/commodities/:transactionId', commoditiesController);

app.get('`/transactions?username=${username}`', transactionsController)

module.exports = app;