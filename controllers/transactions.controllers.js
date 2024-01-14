const express = require('express');
const router = express.Router();
const transactions = require('../models/transaction.model');
const bodyParser = require('body-parser');

// Middleware to check if a transaction exists
function transactionExists(req, res, next) {
  const id = req.params.transaction_id; // Assuming the parameter is 'transaction_id'
  const transaction = transactions.find(transaction => transaction.transaction_id === id); // Assuming the ID property is '_id'

  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found' });
  }

  next();
}


// Middleware to validate transaction data
function validateTransactionData(req, res, next) {
  const newTransaction = req.body;

  if (
    typeof newTransaction.date === 'string' &&
    typeof newTransaction.username === 'string' &&
    typeof newTransaction.purchase === 'string' &&
    typeof newTransaction.type === 'string' &&
    typeof newTransaction.store === 'string' &&
    typeof newTransaction.amount === 'number'
  ) {
    next();
  } else {
    return res.status(400).json({ message: 'Invalid transaction data provided' });
  }
}

router.use(bodyParser.json());

// Create a new transaction
router.post('/transactions', validateTransactionData, (req, res) => {
  const newTransaction = req.body;

  if (transactions.find((txn) => txn.transaction_id === newTransaction.transaction_id)) {
    return res.status(400).json({ message: 'Transaction already exists' });
  } else {
    newTransaction.transaction_id = transactions.length + 1;
    const newTransactionObj = {
      transaction_id: newTransaction.transaction_id,
      name: newTransaction.name,
      username: newTransaction.username,
      purchase: newTransaction.purchase,
      type: newTransaction.type,
      store: newTransaction.store,
      amount: newTransaction.amount,
      date: newTransaction.date,
    };

    transactions.push(newTransactionObj);
    return res.status(201).json({
      status: 'OK',
      payload: transactions[transactions.length - 1],
      message: 'Transaction created',
    });
  }
});

// Get all transactions
router.get('/transactions', async (req, res) => {
  res.status(200).json(transactions);
});

// Get a transaction by ID
router.get('/transactions/:transaction_id', (req, res) => {
  const id = req.params.transaction_id;
  const transaction = transactions.find((txn) => txn._id === id); // Corrected property name

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ message: 'Transaction not found' });
  }
});


// Update a transaction by ID
router.put('/transactions/:transaction_id', transactionExists, validateTransactionData, (req, res) => {
  const { id } = req.params;
  transactions[id] = req.body;
  res.status(200).json({ updatedTransaction: transactions[id] });
});

// Delete a transaction by ID
router.delete('/transactions/:transaction_id', transactionExists, (req, res) => {
  const { id } = req.params;
  const deletedTransaction = transactions.splice(id, 1);
  res.status(204).send('Transaction deleted successfully');
});


// Filter transactions by name
router.get('/transactions', (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredTransactions = transactions.filter((txn) => txn.name === name);
    return res.json(filteredTransactions);
  }
  return res.json(filteredTransactions);
});

router.get('/transactions', (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required for filtering' });
  }

  const filteredTransactions = transactions.filter((transaction) => transaction.username === username);
  res.json(filteredTransactions);
});


// Sort transactions by amount and direction
router.get('/transactions', (req, res) => {
  const { sortByAmount, sortDirection } = req.query;

  let sortedTransactions = [...transactions];

  if (sortByAmount && sortDirection === 'asc') {
    sortedTransactions.sort((a, b) => a.amount - b.amount);

    if (sortDirection === 'desc') {
      sortedTransactions.reverse();
    }
  }

  return res.json(sortedTransactions);
});


// Filter transactions by type
router.get('/transactions', (req, res) => {
  const { type } = req.query;
  if (type) {
    const filteredTransactions = transactions.filter((txn) => txn.type === type);
    return res.json(filteredTransactions);
  }
  return res.json(filteredTransactions);
});



module.exports = router;
