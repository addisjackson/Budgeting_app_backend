const faker = require('faker');

// Create an array of initial transactions
const initialCommodities = [
{
    transaction_id: 98,
    purchase: 'Shirt',
    type: 'Entertainment',
    store: 'Hilpert - Collins',
    amount: '451.44'
  },
  {
    transaction_id: 99,
    purchase: 'Cheese',
    type: 'Apparel',
    store: 'Howell and Sons',
    amount: '713.05'
  },
  {
    transaction_id: 100,
    purchase: 'Bacon',
    type: 'Miscellaneous',
    store: 'Crooks, Boehm and Windler',
    amount: '808.41'
  }
];

// Create an array to store the generated commodities
const numCommoditiesToAdd = 200; // Number of additional commodities to generate
const generatedCommodities = [];

// Generate new commodities
for (let i = 1; i <= numCommoditiesToAdd; i++) {


  // Create a new commodity object
  const newCommodity = {
    transaction_id: initialCommodities.length + i,
    purchase: faker.commerce.product(),
    type: faker.random.arrayElement([
      'Child Care & Education',
      'Apparel',
      'Housing',
      'Food',
      'Transportation',
      'Healthcare',
      'Miscellaneous'
    ]),
    store: faker.company.companyName(),
    amount: parseFloat(faker.finance.amount(1, 1000, 2)).toFixed(2),
  };
  
  // Push the new commodity object to the generatedCommodities array
  generatedCommodities.push(newCommodity);
}


// Add the generated commodities to the initial commodities array
//Combine the initial and generated commodities
const allCommodities = initialCommodities.concat(generatedCommodities);
console.log(allCommodities);



module.exports = allCommodities;