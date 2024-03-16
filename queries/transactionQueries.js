const transactions = require('../models/transaction.model'); // Assuming the data file is named transactionsData.js

// Get all transactions
const getAllTransactions = () => {
  return transactions;
};

// Get transaction by ID
const getTransactionById = (transactionId) => {
  return transactions.find(transaction => transaction.transaction_id === transactionId);
};

// Get transaction by username
const getTransactionByUsername = (username) => {
  return transactions.find(transaction => transaction.username === username);
};

// Get transaction by name
const getTransactionByName = (name) => {
  return transactions.find(transaction => transaction.name === name);
};

// Create a new transaction
const createTransaction = (newTransaction) => {
  // Assign a new transaction ID (replace this logic with your actual ID assignment)
  const newTransactionId = transactions.length + 1;
  newTransaction.transaction_id = newTransactionId;

  // Add the new transaction to the existing array
  transactions.push(newTransaction);

  return newTransaction;
};

// Update transaction by ID
const updateTransaction = (transactionId, updatedTransaction) => {
  const index = transactions.findIndex(transaction => transaction.transaction_id === transactionId);

  if (index !== -1) {
    // Update the existing transaction with the new details
    transactions[index] = { ...transactions[index], ...updatedTransaction };

    return {
      success: true,
      updatedTransaction: transactions[index],
    };
  } else {
    return { success: false };
  }
};

// Delete transaction by ID
const deleteTransaction = (transactionId) => {
  const index = transactions.findIndex(transaction => transaction.transaction_id === transactionId);

  if (index !== -1) {
    // Remove the transaction from the array
    transactions.splice(index, 1);

    return { success: true };
  } else {
    return { success: false };
  }
};

// Get transactions by purchase
const getTransactionsByPurchase = (purchase) => {
    return transactions.filter(transaction => transaction.purchase === purchase);
  };
  
  // Get transactions by type
  const getTransactionsByType = (type) => {
    return transactions.filter(transaction => transaction.type === type);
  };
  

  const getTransactionsByMonthYear = (month, year) => {
    return transactions.filter(transaction =>
      new Date(transaction.date).getMonth() + 1 === parseInt(month) &&
      new Date(transaction.date).getFullYear() === parseInt(year)
    );
  };
  
  const getTransactionsByMonthYearUserType = (month, year, username, type) => {
    return transactions.filter(transaction =>
      new Date(transaction.date).getMonth() + 1 === parseInt(month) &&
      new Date(transaction.date).getFullYear() === parseInt(year) &&
      transaction.username === username &&
      transaction.type === type
    );
  };
  

module.exports = {
  getAllTransactions,
  getTransactionById,
  getTransactionByUsername,
  getTransactionByName,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionsByPurchase,
  getTransactionsByType,
  getTransactionsByMonthYear,
  getTransactionsByMonthYearUserType,
};

