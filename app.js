const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const accountsController = require('./controllers/accounts.controllers');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(accountsController);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'plaid-link.html'));
  });


function handleError(errorMessage) {
  console.log(errorMessage);
}

app.get("/accounts", accountsController.getAccounts);
app.get("/accounts/:accountId", accountsController.getAccount);
app.put("/accounts/:accountId", accountsController.updateAccount);
app.delete("/accounts/:accountId", accountsController.deleteAccount);
app.post("/accounts", accountsController.createAccount);
 

module.exports = app