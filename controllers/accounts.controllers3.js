const express = require('express');
const router = express.Router();
const accountQueries = require('../queries/accountQueries');

// Get all accounts
router.get('/accounts', (req, res) => {
  const allAccounts = accountQueries.getAllAccounts();
  res.json(allAccounts);
});

// Get account by ID
router.get('/accounts/:accountId', (req, res) => {
  const accountId = parseInt(req.params.accountId);
  const account = accountQueries.getAccountById(accountId);

  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

// Get account by username
router.get('/accounts/username/:username', (req, res) => {
  const username = req.params.username;
  const account = accountQueries.getAccountByUsername(username);

  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

// Get account by name
router.get('/accounts/name/:name', (req, res) => {
  const name = req.params.name;
  const account = accountQueries.getAccountByName(name);

  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

// Create a new account
router.post('/accounts', (req, res) => {
  // Assuming the request body contains account details
  const newAccount = req.body;
  const createdAccount = accountQueries.createAccount(newAccount);
  res.status(201).json(createdAccount);
});

// Update account by ID
router.put('/accounts/:accountId', (req, res) => {
  const accountId = parseInt(req.params.accountId);
  // Assuming the request body contains updated account details
  const updatedAccount = req.body;
  const result = accountQueries.updateAccount(accountId, updatedAccount);

  if (result.success) {
    res.json(result.updatedAccount);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

// Delete account by ID
router.delete('/accounts/:accountId', (req, res) => {
  const accountId = parseInt(req.params.accountId);
  const result = accountQueries.deleteAccount(accountId);

  if (result.success) {
    res.json({ message: 'Account deleted successfully' });
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

module.exports = router;
