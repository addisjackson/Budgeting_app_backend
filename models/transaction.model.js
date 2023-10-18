const transactionsData = require('../faker.js').createdTransactions;

const jsonTransactions = JSON.stringify(transactionsData);

console.log (jsonTransactions);

module.exports = jsonTransactions;
