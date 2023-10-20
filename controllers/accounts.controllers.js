const express = require('express');
const router = express.Router();
const existingAccounts = require('../models/account.model');
const bodyParser = require('body-parser');

// Middleware to check if an account exists
function accountExists(req, res, next) {
  const { accountId } = req.params;
  const account = existingAccounts.find((acc) => acc.account_id === accountId);

  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }

  next();
}

// Middleware to validate account data
function validateAccountData(req, res, next) {
  const newAccount = req.body;

  if (
    typeof newAccount.account_id === 'string' &&
    typeof newAccount.username === 'string' &&
    typeof newAccount.balance === 'number' &&
    typeof newAccount.account_number === 'string' &&
    typeof newAccount.routing_number === 'string' &&
    typeof newAccount.type === 'string'
  ) {
    next();
  } else {
    return res.status(400).json({ message: 'Invalid account data provided' });
  }
}

router.use(bodyParser.json());

// Create a new account
router.post('/accounts', validateAccountData, (req, res) => {
  const newAccount = req.body;

  if (existingAccounts.find((acc) => acc.account_id === newAccount.account_id)) {
    return res.status(400).json({ message: 'Account already exists' });
  } else {
    const newAccountObj = {
      account_id: newAccount.account_id,
      username: newAccount.username,
      balance: newAccount.balance,
      account_number: newAccount.account_number,
      routing_number: newAccount.routing_number,
      type: newAccount.type,
    };

    existingAccounts.push(newAccountObj);
    return res.status(201).json({
      status: 'OK',
      payload: existingAccounts[existingAccounts.length - 1],
      message: 'Account created',
    });
  }
});

// Get all accounts
router.get('/accounts', (req, res) => {
  res.json(existingAccounts);
});

// Get an account by ID
router.get('/accounts/:accountId', accountExists, (req, res) => {
  const { accountId } = req.params;
  const account = existingAccounts.find((acc) => acc.account_id === accountId);

  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

// Update an account by ID
router.put('/accounts/:accountId', accountExists, validateAccountData, (req, res) => {
  const { accountId } = req.params;
  const updatedAccount = req.body;

  if (!existingAccounts[accountId]) {
    return res.status(404).json({ message: 'Account not found' });
  }

  existingAccounts[accountId] = updatedAccount;
  res.status(200).json({ updatedAccount: updatedAccount });
});

// Delete an account by ID
router.delete('/accounts/:accountId', accountExists, (req, res) => {
  const { accountId } = req.params;

  if (!existingAccounts[accountId]) {
    return res.status(404).json({ message: 'Account not found' });
  }

  existingAccounts.splice(accountId, 1);
  res.status(204).send('Account deleted successfully');
});

module.exports = router;
