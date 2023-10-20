const faker = require('faker');

const initialTransactions = [
  {
    transaction_id: 1,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Teddy Bear',
    type: 'Entertainment',
    store: "Toys' R Us",
    amount: 50.12,
  },
  {
    transaction_id: 2,
    name: 'Marie Taylor',
    username: 'blue_mahagony',
    purchase: 'Stove',
    type: 'Housing',
    store: 'P. C. Richards',
    amount: 133.45,
  },
  {
    transaction_id: 3,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Television',
    type: 'Entertainment',
    store: 'P.C. Richards',
    amount: 50.12,
  },
  {
    transaction_id: 4,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'MacBook Air',
    type: 'Education',
    store: 'Apple Inc',
    amount: 765.88,
  },
];

const numTransactionsToAdd = 50; // Number of additional transactions to generate
const generatedTransactions = [];

for (let i = 1; i <= numTransactionsToAdd; i++) {
  const newTransaction = {
    transaction_id: initialTransactions.length + i,
    name: faker.name.findName(),
    username: faker.internet.userName(),
    purchase: faker.commerce.product(),
    type: faker.random.arrayElement(['Education', 'Entertainment', 'Housing', 'Food', 'Transportation', 'Healthcare']),
    store: faker.company.companyName(),
    amount: parseFloat(faker.finance.amount(1, 1000, 2)),
  };
  generatedTransactions.push(newTransaction);
}

// Combine the initial and generated transactions
const allTransactions = initialTransactions.concat(generatedTransactions);
console.log(allTransactions);

module.exports = allTransactions;
