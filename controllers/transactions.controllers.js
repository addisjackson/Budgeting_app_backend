const express = require('express');
const router = express.Router();
const transactionQueries = require('../queries/transactionQueries');
const transactions = require('../models/transaction.model');
const { getTransactionsByMonthYearUserType, getTransactionsByMonthYear } = require('../queries/transactionQueries');
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(express.json()); // Use express.json() instead of bodyParser.json()
router.use(cors()); // Use cors as a function
router.use(bodyParser.json());

// Middleware to check if a transaction exists
function transactionExists(req, res, next) {
  const transaction_id = req.params;
  const transaction = transactions.find(transaction => transaction.transaction_id === transaction_id);

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
    typeof newTransaction.amount === 'string'
  ) {
    next();
  } else {
    return res.status(400).json({ message: 'Invalid transaction data provided' });
  }
}

// Create a new transaction
router.post('/', validateTransactionData, (req, res) => {
  const newTransaction = req.body;
  const newTransactionId = transactions.length + 1;
  newTransaction.transaction_id = newTransactionId;

  if (transactions.find((acc) => acc.transaction_id === newTransaction.transaction_id)) {
    return res.status(400).json({ message: 'Transaction already exists' });
  } else {
    const newTransactionObj = {
      transaction_id: newTransaction.transaction_id,
      date: newTransaction.date,
      purchase: newTransaction.purchase,
      store: newTransaction.store,
      amount: newTransaction.amount,
      name: newTransaction.name,
      type: newTransaction.type,
    };

    transactions.push(newTransactionObj);
    return res.status(201).json({
      status: 'OK',
      payload: transactions[transactions.length - 1],
      message: 'Transaction created',
    });
  }
});

// Update a transaction by ID
router.put('/:transaction_id', validateTransactionData, (req, res) => {
  const { transaction_id } = req.params;
  const updatedTransaction = req.body;

  if (!transactions[transaction_id]) {
    return res.status(404).json({ message: 'Transaction not found' });
  }

  transactions[transaction_id] = updatedTransaction;
  res.status(200).json({ updatedTransaction });
});


// Delete a transaction by ID
router.delete('/:transaction_id', transactionExists, (req, res) => {
  const { transaction_id } = req.params;
  const index = transactions.findIndex(transaction => transaction.transaction_id === transaction_id);

  if (index !== -1) {
    transactions.splice(index, 1);
    res.status(204).send('Transaction deleted successfully');
  } else {
    res.status(404).json({ message: 'Transaction not found' });
  }
});

// Get all transactions
router.get('/', (req, res) => {
  const allTransactions = transactionQueries.getAllTransactions();
  res.json(allTransactions);
});

// Get transaction by ID
router.get('/:transaction_id', (req, res) => {
  const transactionId = parseInt(req.params.transaction_id); // Adjust here
  const transaction = transactionQueries.getTransactionById(transactionId);

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ message: 'Transaction not found' });
  }
});

// Get transaction by username
router.get('/username/:username', (req, res) => {
  const username = req.params.username;
  const transaction = transactionQueries.getTransactionByUsername(username);

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ message: 'Transaction not found' });
  }
});

// Get transaction by name
router.get('/name/:name', (req, res) => {
  const name = req.params.name;
  const transaction = transactionQueries.getTransactionByName(name);

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ message: 'Transaction not found' });
  }
});

router.get('/purchase/:purchase', (req, res) => {
  const purchase = req.params.purchase;
  const transactions = transactionQueries.getTransactionsByPurchase(purchase);

  if (transactions.length > 0) {
    res.json(transactions);
  } else {
    res.status(404).json({ message: 'Transactions not found for the specified purchase' });
  }
});

// Get transactions by type
router.get('/transactions/type/:type', (req, res) => {
  const type = req.params.type;
  const transactions = transactionQueries.getTransactionsByType(type);

  if (transactions.length > 0) {
    res.json(transactions);
  } else {
    res.status(404).json({ message: 'Transactions not found for the specified type' });
  }
});

router.get('/month-year', (req, res) => {
  const { month, year } = req.query;
  const transactions = getTransactionsByMonthYear(month, year);

  if (transactions.length > 0) {
    res.json(transactions);
  } else {
    res.status(404).json({ message: 'Transactions not found for the specified month and year' });
  }
});

// Get transactions by month, year, username, and type
router.get('/month-year-user-type', (req, res) => {
  const { month, year, username, type } = req.query;
  const transactions = getTransactionsByMonthYearUserType(month, year, username, type);

  if (transactions.length > 0) {
    res.json(transactions);
  } else {
    res.status(404).json({ message: 'Transactions not found for the specified month, year, username, and type' });
  }
});

module.exports = router;
