const express = require('express');
const router = express.Router();
const transactions = require('../models/transaction.model');
const bodyParser = require('body-parser');

// Middleware to check if a transaction exists
function transactionExists(req, res, next) {
  const { transactionId } = req.params;
  const transaction = transactions.find((txn) => txn.transaction_id === transactionId);

  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found' });
  }

  next();
}

// Middleware to validate transaction data
function validateTransactionData(req, res, next) {
  const newTransaction = req.body;

  if (
    typeof newTransaction.transaction_id === 'string' &&
    typeof newTransaction.name === 'string' &&
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
    const newTransactionObj = {
      transaction_id: newTransaction.transaction_id,
      name: newTransaction.name,
      username: newTransaction.username,
      purchase: newTransaction.purchase,
      type: newTransaction.type,
      store: newTransaction.store,
      amount: newTransaction.amount,
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
router.get('/transactions', (req, res) => {
  res.json(transactions);
});

// Get a transaction by ID
router.get('/transactions/:transactionId', transactionExists, (req, res) => {
  const { transactionId } = req.params;
  const transaction = transactions.find((txn) => txn.transaction_id === transactionId);

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ message: 'Transaction not found' });
  }
});

// Update a transaction by ID
router.put('/transactions/:transactionId', transactionExists, validateTransactionData, (req, res) => {
  const { transactionId } = req.params;
  transactions[transactionId] = req.body;
  res.status(200).json({ updatedTransaction: transactions[transactionId] });
});

// Delete a transaction by ID
router.delete('/transactions/:transactionId', transactionExists, (req, res) => {
  const { transactionId } = req.params;
  const deletedTransaction = transactions.splice(transactionId, 1);
  res.status(204).send('Transaction deleted successfully');
});

module.exports = router;
