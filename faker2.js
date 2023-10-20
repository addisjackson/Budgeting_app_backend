// Existing accounts
const existingAccounts = [
    {
      account_id: 1,
      userName: "blue_mahagony",
      balance: 8121.42,
      account_number: "5638296736939019",
      routing_number: "74832974302",
      type: "Checking",
    },
    {
      account_id: 2,
      userName: "taboo",
      balance: 631.42,
      account_number: "57494932708186740",
      routing_number: "765645435687",
      type: "Savings",
    },
    {
      account_id: 3,
      userName: "herring",
      balance: 1012.66,
      account_number: "56386478872659198",
      routing_number: "6478839076990",
      type: "Checking",
    },
    {
        account_id: 4,
        userName: 'marie-taylor',
        balance: 1001.3512333205376,
        account_number: '4924554518255981',
        routing_number: '4175980153',
        type: 'Checking'
      }
  ];
  
  // Generate 50 more account objects
  for (let i = 4; i <= 53; i++) {
    existingAccounts.push({
      account_id: i,
      userName: faker.random.arrayElement(['blue_mahagony', 'taboo', 'herring', 'marie-taylor']),
      balance: Math.random() * 10000, // Generate a random balance
      account_number: `${Math.floor(Math.random() * 10000000000000000)}`,
      routing_number: `${Math.floor(Math.random() * 10000000000)}`,
      type: i % 2 === 0 ? "Checking" : "Savings", // Alternating between Checking and Savings
    });
  }
  
  console.log(existingAccounts);
  // Export the updated array
  module.exports = existingAccounts;
  