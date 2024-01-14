const transactions = [
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
  },
  {
    transaction_id: 5,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Shoes',
    type: 'Food',
    store: 'Hermiston - White',
    amount: '574.34',
    date: '10/12/2023'
  },
  {
    transaction_id: 6,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Shoes',
    type: 'Housing',
    store: 'Lebsack Inc',
    amount: '629.30',
    date: '1/18/2022'
  },
  {
    transaction_id: 7,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Towels',
    type: 'Child Care & Education',
    store: 'Gleason, Zboncak and Balistreri',
    amount: '908.86',
    date: '6/8/2023'
  },
  {
    transaction_id: 8,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Table',
    type: 'Entertainment',
    store: 'Bogan LLC',
    amount: '586.32',
    date: '1/27/2021'
  },
  {
    transaction_id: 9,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Shoes',
    type: 'Miscellaneous',
    store: 'Christiansen LLC',
    amount: '999.91',
    date: '6/2/2022'
  },
  {
    transaction_id: 10,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Sausages',
    type: 'Miscellaneous',
    store: 'Hammes - Flatley',
    amount: '989.11',
    date: '7/28/2021'
  },
  {
    transaction_id: 11,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Ball',
    type: 'Food',
    store: 'Lakin, Corkery and Hahn',
    amount: '50.67',
    date: '10/4/2022'
  },
  {
    transaction_id: 12,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Shoes',
    type: 'Entertainment',
    store: 'Pagac Inc',
    amount: '924.01',
    date: '7/11/2021'
  },
  {
    transaction_id: 13,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Car',
    type: 'Child Care & Education',
    store: 'Farrell Inc',
    amount: '625.35',
    date: '7/21/2023'
  },
  {
    transaction_id: 14,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Chair',
    type: 'Apparel',
    store: 'Abbott LLC',
    amount: '676.73',
    date: '12/4/2022'
  },
  {
    transaction_id: 15,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Gloves',
    type: 'Apparel',
    store: 'Swift - Rogahn',
    amount: '609.07',
    date: '1/8/2022'
  },
  {
    transaction_id: 16,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Table',
    type: 'Child Care & Education',
    store: 'Bartoletti - Gislason',
    amount: '520.24',
    date: '11/26/2022'
  },
  {
    transaction_id: 17,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Gloves',
    type: 'Transportation',
    store: 'Brown, Moore and Cormier',
    amount: '803.96',
    date: '5/30/2021'
  },
  {
    transaction_id: 18,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Computer',
    type: 'Transportation',
    store: 'Feil Group',
    amount: '547.42',
    date: '9/19/2022'
  },
  {
    transaction_id: 19,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Car',
    type: 'Housing',
    store: 'Purdy - Robel',
    amount: '547.38',
    date: '7/16/2021'
  },
  {
    transaction_id: 20,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Towels',
    type: 'Child Care & Education',
    store: 'Smitham LLC',
    amount: '420.46',
    date: '12/1/2022'
  },
  {
    transaction_id: 21,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Towels',
    type: 'Child Care & Education',
    store: 'Lebsack - Lubowitz',
    amount: '621.71',
    date: '10/10/2022'
  },
  {
    transaction_id: 22,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Bike',
    type: 'Miscellaneous',
    store: 'Hamill - Dach',
    amount: '103.69',
    date: '7/1/2021'
  },
  {
    transaction_id: 23,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Fish',
    type: 'Transportation',
    store: 'Kris, Gottlieb and Rempel',
    amount: '778.89',
    date: '7/13/2023'
  },
  {
    transaction_id: 24,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Mouse',
    type: 'Miscellaneous',
    store: 'Haag, Windler and Hudson',
    amount: '661.15',
    date: '7/1/2021'
  },
  {
    transaction_id: 25,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Computer',
    type: 'Apparel',
    store: 'Paucek Inc',
    amount: '307.35',
    date: '3/27/2023'
  },
  {
    transaction_id: 26,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Table',
    type: 'Housing',
    store: 'Hermann Group',
    amount: '404.68',
    date: '4/29/2022'
  },
  {
    transaction_id: 27,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Fish',
    type: 'Housing',
    store: 'Reichert, Stiedemann and Emard',
    amount: '417.08',
    date: '8/3/2023'
  },
  {
    transaction_id: 28,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Fish',
    type: 'Child Care & Education',
    store: 'Lebsack, DuBuque and Miller',
    amount: '975.80',
    date: '6/13/2023'
  },
  {
    transaction_id: 29,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Tuna',
    type: 'Miscellaneous',
    store: 'Goldner, Boehm and Upton',
    amount: '461.02',
    date: '6/11/2023'
  },
  {
    transaction_id: 30,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Keyboard',
    type: 'Housing',
    store: 'Feest, Skiles and Little',
    amount: '180.63',
    date: '1/16/2023'
  },
  {
    transaction_id: 31,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Cheese',
    type: 'Miscellaneous',
    store: 'Klein, Schimmel and Rosenbaum',
    amount: '757.27',
    date: '12/9/2021'
  },
  {
    transaction_id: 32,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Shoes',
    type: 'Housing',
    store: 'Hilpert, Crooks and Schiller',
    amount: '19.68',
    date: '7/19/2022'
  },
  {
    transaction_id: 33,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Chips',
    type: 'Entertainment',
    store: 'Denesik Inc',
    amount: '686.86',
    date: '1/13/2021'
  },
  {
    transaction_id: 34,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Pants',
    type: 'Apparel',
    store: 'Torp, Heaney and Windler',
    amount: '347.43',
    date: '9/15/2022'
  },
  {
    transaction_id: 35,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Gloves',
    type: 'Healthcare',
    store: 'Dare - Waters',
    amount: '765.03',
    date: '8/6/2021'
  },
  {
    transaction_id: 36,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Ball',
    type: 'Entertainment',
    store: 'Labadie Inc',
    amount: '47.27',
    date: '12/21/2022'
  },
  {
    transaction_id: 37,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Chair',
    type: 'Miscellaneous',
    store: 'Walsh Group',
    amount: '697.81',
    date: '4/26/2023'
  },
  {
    transaction_id: 38,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Car',
    type: 'Transportation',
    store: 'Schowalter, Boehm and Christiansen',
    amount: '500.24',
    date: '3/26/2021'
  },
  {
    transaction_id: 39,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Salad',
    type: 'Food',
    store: 'Swift - Walter',
    amount: '344.35',
    date: '3/23/2021'
  },
  {
    transaction_id: 40,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Keyboard',
    type: 'Housing',
    store: 'Herman - Muller',
    amount: '495.94',
    date: '6/9/2022'
  },
  {
    transaction_id: 41,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Keyboard',
    type: 'Entertainment',
    store: 'Dickinson Group',
    amount: '281.75',
    date: '1/5/2023'
  },
  {
    transaction_id: 42,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Sausages',
    type: 'Miscellaneous',
    store: 'Prosacco, Herman and Deckow',
    amount: '994.37',
    date: '7/18/2023'
  },
  {
    transaction_id: 43,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Shoes',
    type: 'Miscellaneous',
    store: "Gibson - D'Amore",
    amount: '701.91',
    date: '1/24/2022'
  },
  {
    transaction_id: 44,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Keyboard',
    type: 'Food',
    store: 'Sanford, Goldner and Oberbrunner',
    amount: '176.96',
    date: '11/16/2023'
  },
  {
    transaction_id: 45,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Shirt',
    type: 'Apparel',
    store: 'Koch Group',
    amount: '740.40',
    date: '9/19/2021'
  },
  {
    transaction_id: 46,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Bacon',
    type: 'Healthcare',
    store: 'Turcotte Group',
    amount: '632.63',
    date: '7/23/2022'
  },
  {
    transaction_id: 47,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Table',
    type: 'Transportation',
    store: 'Prosacco - Dickinson',
    amount: '550.06',
    date: '2/22/2021'
  },
  {
    transaction_id: 48,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Mouse',
    type: 'Apparel',
    store: 'Reilly, Howell and Treutel',
    amount: '979.49',
    date: '4/10/2021'
  },
  {
    transaction_id: 49,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Keyboard',
    type: 'Transportation',
    store: 'Kessler - Kirlin',
    amount: '590.17',
    date: '6/25/2022'
  },
  {
    transaction_id: 50,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Keyboard',
    type: 'Transportation',
    store: 'Altenwerth - Becker',
    amount: '278.52',
    date: '4/13/2022'
  },
  {
    transaction_id: 51,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Fish',
    type: 'Healthcare',
    store: 'Koepp, Jakubowski and Hegmann',
    amount: '680.60',
    date: '12/15/2022'
  },
  {
    transaction_id: 52,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Gloves',
    type: 'Child Care & Education',
    store: 'Murray - Dach',
    amount: '6.80',
    date: '6/5/2022'
  },
  {
    transaction_id: 53,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Chips',
    type: 'Housing',
    store: 'Mayert - Botsford',
    amount: '465.49',
    date: '12/8/2022'
  },
  {
    transaction_id: 54,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Ball',
    type: 'Entertainment',
    store: 'Welch, Nitzsche and Lind',
    amount: '471.86',
    date: '2/12/2021'
  },
  {
    transaction_id: 55,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Bike',
    type: 'Miscellaneous',
    store: 'Gerlach LLC',
    amount: '63.62',
    date: '10/28/2022'
  },
  {
    transaction_id: 56,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Salad',
    type: 'Child Care & Education',
    store: 'Trantow, Schuppe and Goldner',
    amount: '367.77',
    date: '3/3/2023'
  },
  {
    transaction_id: 57,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Sausages',
    type: 'Child Care & Education',
    store: 'Bosco, Dickens and Volkman',
    amount: '296.79',
    date: '4/14/2021'
  },
  {
    transaction_id: 58,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Tuna',
    type: 'Miscellaneous',
    store: 'Hamill - Lemke',
    amount: '870.81',
    date: '9/25/2023'
  },
  {
    transaction_id: 59,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Salad',
    type: 'Entertainment',
    store: 'Schimmel - Macejkovic',
    amount: '152.31',
    date: '1/3/2021'
  },
  {
    transaction_id: 60,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Fish',
    type: 'Transportation',
    store: "Ernser - O'Keefe",
    amount: '937.18',
    date: '10/21/2022'
  },
  {
    transaction_id: 61,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Chips',
    type: 'Healthcare',
    store: 'Dietrich - Green',
    amount: '38.92',
    date: '9/22/2022'
  },
  {
    transaction_id: 62,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Chicken',
    type: 'Housing',
    store: 'Walter, Murray and Fahey',
    amount: '156.64',
    date: '12/6/2021'
  },
  {
    transaction_id: 63,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Bike',
    type: 'Transportation',
    store: 'Bogisich Group',
    amount: '512.61',
    date: '7/13/2022'
  },
  {
    transaction_id: 64,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Bike',
    type: 'Food',
    store: 'Padberg - Jakubowski',
    amount: '605.44',
    date: '6/26/2023'
  },
  {
    transaction_id: 65,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Keyboard',
    type: 'Transportation',
    store: 'Hammes - Ruecker',
    amount: '153.40',
    date: '11/14/2021'
  },
  {
    transaction_id: 66,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Cheese',
    type: 'Child Care & Education',
    store: 'Yost, Pfeffer and Crooks',
    amount: '748.30',
    date: '2/15/2023'
  },
  {
    transaction_id: 67,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Gloves',
    type: 'Transportation',
    store: 'Schroeder Inc',
    amount: '759.83',
    date: '9/22/2021'
  },
  {
    transaction_id: 68,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Cheese',
    type: 'Apparel',
    store: 'Schuppe Inc',
    amount: '489.46',
    date: '1/5/2023'
  },
  {
    transaction_id: 69,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Chicken',
    type: 'Food',
    store: 'Anderson and Sons',
    amount: '403.22',
    date: '8/30/2021'
  },
  {
    transaction_id: 70,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Cheese',
    type: 'Transportation',
    store: 'Lebsack - Dickinson',
    amount: '301.19',
    date: '5/31/2022'
  },
  {
    transaction_id: 71,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Shoes',
    type: 'Apparel',
    store: 'Carroll - Grimes',
    amount: '128.76',
    date: '7/24/2023'
  },
  {
    transaction_id: 72,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Mouse',
    type: 'Housing',
    store: 'Dickens, Harvey and Rempel',
    amount: '30.74',
    date: '2/3/2022'
  },
  {
    transaction_id: 73,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Shoes',
    type: 'Apparel',
    store: 'Zieme Inc',
    amount: '275.30',
    date: '11/7/2021'
  },
  {
    transaction_id: 74,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Sausages',
    type: 'Miscellaneous',
    store: 'Green - Bernier',
    amount: '411.49',
    date: '7/29/2023'
  },
  {
    transaction_id: 75,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Cheese',
    type: 'Child Care & Education',
    store: 'Predovic - Kozey',
    amount: '901.13',
    date: '8/26/2023'
  },
  {
    transaction_id: 76,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Chair',
    type: 'Food',
    store: 'Wolff and Sons',
    amount: '643.85',
    date: '2/12/2022'
  },
  {
    transaction_id: 77,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Shirt',
    type: 'Miscellaneous',
    store: 'Terry, Effertz and McCullough',
    amount: '403.34',
    date: '12/5/2023'
  },
  {
    transaction_id: 78,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Bacon',
    type: 'Transportation',
    store: 'Schneider LLC',
    amount: '580.24',
    date: '4/6/2022'
  },
  {
    transaction_id: 79,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Keyboard',
    type: 'Healthcare',
    store: 'King - Grady',
    amount: '217.25',
    date: '4/11/2022'
  },
  {
    transaction_id: 80,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Bacon',
    type: 'Entertainment',
    store: 'Eichmann - Tremblay',
    amount: '606.17',
    date: '8/27/2023'
  },
  {
    transaction_id: 81,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Bacon',
    type: 'Entertainment',
    store: 'Kessler Group',
    amount: '379.58',
    date: '9/1/2022'
  },
  {
    transaction_id: 82,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Soap',
    type: 'Child Care & Education',
    store: 'Ritchie - Prosacco',
    amount: '31.91',
    date: '7/24/2023'
  },
  {
    transaction_id: 83,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Bike',
    type: 'Miscellaneous',
    store: 'Maggio - Marvin',
    amount: '157.96',
    date: '6/4/2022'
  },
  {
    transaction_id: 84,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Table',
    type: 'Transportation',
    store: 'McClure - Kris',
    amount: '420.97',
    date: '10/4/2021'
  },
  {
    transaction_id: 85,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Shirt',
    type: 'Entertainment',
    store: 'Blanda - Murray',
    amount: '337.37',
    date: '9/29/2022'
  },
  {
    transaction_id: 86,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Tuna',
    type: 'Healthcare',
    store: 'Gottlieb, Hudson and Sipes',
    amount: '957.36',
    date: '3/29/2021'
  },
  {
    transaction_id: 87,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Salad',
    type: 'Miscellaneous',
    store: 'Johnston - Gibson',
    amount: '140.54',
    date: '10/2/2023'
  },
  {
    transaction_id: 88,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Towels',
    type: 'Housing',
    store: 'Kunze Inc',
    amount: '737.12',
    date: '1/20/2021'
  },
  {
    transaction_id: 89,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Pants',
    type: 'Child Care & Education',
    store: 'Braun - Buckridge',
    amount: '170.41',
    date: '3/28/2022'
  },
  {
    transaction_id: 90,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Keyboard',
    type: 'Apparel',
    store: 'Turner, Kiehn and Schaden',
    amount: '845.19',
    date: '9/22/2023'
  },
  {
    transaction_id: 91,
    name: 'Jason Steegs',
    username: 'taboo',
    purchase: 'Hat',
    type: 'Housing',
    store: 'Kub - Sanford',
    amount: '93.82',
    date: '2/28/2022'
  },
  {
    transaction_id: 92,
    name: 'Icolyn Jones',
    username: 'herring',
    purchase: 'Chips',
    type: 'Miscellaneous',
    store: 'Lubowitz, Krajcik and Okuneva',
    amount: '937.81',
    date: '9/19/2022'
  },
  {
    transaction_id: 93,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Fish',
    type: 'Apparel',
    store: 'Welch and Sons',
    amount: '750.94',
    date: '10/7/2023'
  },
  {
    transaction_id: 94,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Sausages',
    type: 'Housing',
    store: 'Leannon - Bernier',
    amount: '324.46',
    date: '5/9/2021'
  },
  {
    transaction_id: 95,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Salad',
    type: 'Miscellaneous',
    store: 'Wilderman LLC',
    amount: '242.33',
    date: '3/15/2023'
  },
  {
    transaction_id: 96,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Chips',
    type: 'Miscellaneous',
    store: 'Powlowski LLC',
    amount: '734.70',
    date: '3/2/2022'
  },
  {
    transaction_id: 97,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Tuna',
    type: 'Housing',
    store: 'Fisher - Waelchi',
    amount: '12.57',
    date: '3/13/2021'
  },
  {
    transaction_id: 98,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Fish',
    type: 'Food',
    store: "O'Conner - Haag",
    amount: '133.84',
    date: '10/19/2022'
  },
  {
    transaction_id: 99,
    name: 'Alice Williams',
    username: 'blue_mahagony',
    purchase: 'Bacon',
    type: 'Entertainment',
    store: 'Grant - Zieme',
    amount: '89.41',
    date: '5/4/2021'
  },
  {
    transaction_id: 100,
    name: 'Marie Taylor',
    username: 'marie-taylor',
    purchase: 'Car',
    type: 'Housing',
    store: 'Rice, Stiedemann and Grimes',
    amount: '644.25',
    date: '10/27/2021'
  }
];

module.exports = transactions;