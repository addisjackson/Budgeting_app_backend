const existingAccounts = require('../models/account.model'); // Assuming the data file is named accountsData.js

// Get all accounts
const getAllAccounts = () => {
  return existingAccounts;
};

// Get account by ID
const getAccountById = (accountId) => {
  return existingAccounts.find((account) => account.account_id === accountId);
};

// Get account by username
const getAccountByUsername = (username) => {
  return existingAccounts.find((account) => account.userName === username);
};

// Create a new account
const createAccount = (newAccountData) => {
  // Assign a new account ID (replace this logic with your actual ID assignment)
  const newAccountId = existingAccounts.length + 1;

  const newAccount = {
    account_id: newAccountId,
    userName: newAccountData.userName,
    balance: newAccountData.balance,
    account_number: newAccountData.account_number,
    routing_number: newAccountData.routing_number,
    monthlyIncome: newAccountData.monthlyIncome,
    type: newAccountData.type,
  };

  // Add the new account to the existing array
  existingAccounts.push(newAccount);

  return newAccount;
};

// Update account by ID
const updateAccount = (accountId, updatedAccount) => {
  const index = existingAccounts.findIndex((account) => account.account_id === accountId);

  if (index !== -1) {
    // Update the existing account with the new details
    existingAccounts[index] = { ...existingAccounts[index], ...updatedAccount };

    return {
      success: true,
      updatedAccount: existingAccounts[index],
    };
  } else {
    return { success: false };
  }
};

// Delete account by ID
const deleteAccount = (accountId) => {
  const index = existingAccounts.findIndex((account) => account.account_id === accountId);

  if (index !== -1) {
    // Remove the account from the array
    existingAccounts.splice(index, 1);

    return { success: true };
  } else {
    return { success: false };
  }
};

module.exports = {
  getAllAccounts,
  getAccountById,
  getAccountByUsername,
  createAccount,
  updateAccount,
  deleteAccount,
};
