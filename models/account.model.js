const existingAccounts  = [{
   account_id: 1,
   userName: "blue_mahagony",
    balance: 8121.42,
    account_number: "5638296736939019",
    routing_number: "74832974302",
    type: "Checking"
},
{
    account_id: 2,
    userName: "taboo",
     balance: 631.42,
     account_number: "57494932708186740",
     routing_number: "765645435687",
     type: "Savings"
},
{
    account_id: 3,
    userName: "herring",
     balance: 1012.66,
     account_number: "56386478872659198",
     routing_number: "6478839076990",
     type: "Checking"
},
{
    account_id: 4,
    userName: 'marie-taylor',
    balance: 1001.3512333205376,
    account_number: '4924554518255981',
    routing_number: '4175980153',
    type: 'Checking'
  }]

// Monthly income for accounts
const monthlyIncomes = [9270, 6333, 8730, 11230];

// Assign monthly income to the first 4 accounts
existingAccounts[0].monthlyIncome = monthlyIncomes[0];
existingAccounts[1].monthlyIncome = monthlyIncomes[1];
existingAccounts[2].monthlyIncome = monthlyIncomes[2];
existingAccounts[3].monthlyIncome = monthlyIncomes[3];

// Export the updated array
module.exports = existingAccounts;