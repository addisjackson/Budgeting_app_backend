const express = require('express');
const router = express.Router();
const accountQueries = require('../queries/accountQueries'); // Assuming the query file is named accountQueries.js
const bodyParser = require('body-parser');
const cors = require('cors');

router.use(cors());
router.use(bodyParser.json());

// Middleware to check if an account exists
async function accountExists(req, res, next) {
  const { accountId } = req.params;
  const account = await accountQueries.getAccountById(accountId);

  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }

  next();
}

// Middleware to validate account data
function validateAccountData(req, res, next) {
  const newAccount = req.body;

  if (
    typeof newAccount.account_id === 'number' &&
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

// Create a new account
router.post('/', validateAccountData, async (req, res) => {
  const newAccount = req.body;
  const createdAccount = await accountQueries.createAccount(newAccount);
  res.status(201).json(createdAccount);
});

// Get all accounts
router.get('/', async (req, res) => {
  const allAccounts = await accountQueries.getAllAccounts();
  res.json(allAccounts);
});

// Get account by ID
router.get('/:accountId', async (req, res) => {
  const accountId = parseInt(req.params.accountId);
  const account = await accountQueries.getAccountById(accountId);

  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

// Update an account by ID
router.put('/:accountId', accountExists, validateAccountData, async (req, res) => {
  const { accountId } = req.params;
  const updatedAccount = req.body;
  const result = await accountQueries.updateAccount(accountId, updatedAccount);

  if (result.success) {
    res.json(result.updatedAccount);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

// Delete an account by ID
router.delete('/:accountId', accountExists, async (req, res) => {
  const { accountId } = req.params;
  const result = await accountQueries.deleteAccount(accountId);

  if (result.success) {
    res.status(204).send('Account deleted successfully');
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

// Get account by username
router.get('/', async (req, res) => {
  const username = req.query.username; // Use req.query to get parameters from the query string
  const account = await accountQueries.getAccountByUsername(username);

  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

module.exports = router;
