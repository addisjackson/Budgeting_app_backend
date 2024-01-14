const faker = require('faker');

// Create an array of initial transactions
const initialTransactions = [
  {
    transaction_id: 1,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Bike',
    type: 'Entertainment',
    store: 'West - Streich',
    amount: '774.04',
    date: '5/30/2021'
  },
  {
    transaction_id: 2,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Hat',
    type: 'Miscellaneous',
    store: 'Treutel - Mayert',
    amount: '26.36',
    date: '8/26/2021'
  },
  {
    transaction_id: 3,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Keyboard',
    type: 'Miscellaneous',
    store: 'Johnson and Sons',
    amount: '146.19',
    date: '2/8/2022'
  },
  {
    transaction_id: 4,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Shirt',
    type: 'Transportation',
    store: 'Towne, Hayes and Howe',
    amount: '671.22',
    date: '8/16/2023'
  }
];


// Create an array to store the generated transactions
const numTransactionsToAdd = 200; // Number of additional transactions to generate
const generatedTransactions = [];


// Generate new transactions
for (let i = 1; i <= numTransactionsToAdd; i++) {
  // Select a random name from the array of names
  const name = faker.random.arrayElement(['Icolyn Jones', 'Jason Steegs', 'Marie Taylor', 'Alice Williams']);
  let username;

  // Set the username based on the name
  if (name === 'Icolyn Jones') {
    username = 'herring';
  } else if (name === 'Jason Steegs') {
    username = 'taboo';
  } else if (name === 'Marie Taylor') {
    username = 'marie-taylor';
  } else {
    username = 'blue_mahagony';
  }


  // Create a new transaction object
  const newTransaction = {
    transaction_id: initialTransactions.length + i,
    name: name,
    username: username,
    purchase: faker.commerce.product(),
    type: faker.random.arrayElement([
      'Child Care & Education',
      'Apparel',
      'Entertainment',
      'Housing',
      'Food',
      'Transportation',
      'Healthcare',
      'Miscellaneous'
    ]),
    store: faker.company.companyName(),
    amount: parseFloat(faker.finance.amount(1, 1000, 2)).toFixed(2),
    date: faker.date.between('2021-01-01', '2023-12-31').toLocaleDateString('en-US'),
  };
  
  // Push the new transaction object to the generatedTransactions array
  generatedTransactions.push(newTransaction);
}

// Combine the initial and generated transactions
const allTransactions = initialTransactions.concat(generatedTransactions);
console.log(allTransactions);

module.exports = allTransactions;
