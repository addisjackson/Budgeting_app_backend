const commodities = [
    {
        transaction_id: 61,
        purchase: 'Cheese',
        type: 'Food',
        store: 'Zulauf - Howell',
        amount: '207.92'
      },
      {
        transaction_id: 62,
        purchase: 'Pants',
        type: 'Miscellaneous',
        store: 'Satterfield LLC',
        amount: '487.78'
      },
      {
        transaction_id: 63,
        purchase: 'Table',
        type: 'Miscellaneous',
        store: 'Kozey - Deckow',
        amount: '473.45'
      },
      {
        transaction_id: 64,
        purchase: 'Tuna',
        type: 'Apparel',
        store: 'Hessel - Cronin',
        amount: '685.39'
      },
      {
        transaction_id: 65,
        purchase: 'Keyboard',
        type: 'Transportation',
        store: 'Farrell - Spinka',
        amount: '618.37'
      },
      {
        transaction_id: 66,
        purchase: 'Pizza',
        type: 'Miscellaneous',
        store: 'Gerlach, Lowe and Senger',
        amount: '409.76'
      },
      {
        transaction_id: 67,
        purchase: 'Hat',
        type: 'Food',
        store: 'Hirthe - Champlin',
        amount: '982.74'
      },
      {
        transaction_id: 68,
        purchase: 'Soap',
        type: 'Entertainment',
        store: 'Dicki - Mueller',
        amount: '540.79'
      },
      {
        transaction_id: 69,
        purchase: 'Keyboard',
        type: 'Miscellaneous',
        store: 'Dooley - Russel',
        amount: '880.13'
      },
      {
        transaction_id: 70,
        purchase: 'Tuna',
        type: 'Healthcare',
        store: 'Rosenbaum and Sons',
        amount: '884.07'
      },
      {
        transaction_id: 71,
        purchase: 'Shoes',
        type: 'Housing',
        store: 'Hills - Batz',
        amount: '121.05'
      },
      {
        transaction_id: 72,
        purchase: 'Cheese',
        type: 'Apparel',
        store: 'Aufderhar Inc',
        amount: '597.74'
      },
      {
        transaction_id: 73,
        purchase: 'Chips',
        type: 'Child Care & Education',
        store: 'Bartell Group',
        amount: '316.93'
      },
      {
        transaction_id: 74,
        purchase: 'Hat',
        type: 'Food',
        store: 'Ratke - Wuckert',
        amount: '269.28'
      },
      {
        transaction_id: 75,
        purchase: 'Mouse',
        type: 'Food',
        store: 'Hartmann - Macejkovic',
        amount: '751.07'
      },
      {
        transaction_id: 76,
        purchase: 'Computer',
        type: 'Child Care & Education',
        store: 'Friesen - Ortiz',
        amount: '565.44'
      },
      {
        transaction_id: 77,
        purchase: 'Chair',
        type: 'Healthcare',
        store: 'Lynch - Koch',
        amount: '793.45'
      },
      {
        transaction_id: 78,
        purchase: 'Bike',
        type: 'Healthcare',
        store: 'Will - Harber',
        amount: '314.10'
      },
      {
        transaction_id: 79,
        purchase: 'Soap',
        type: 'Transportation',
        store: 'Jones, Dicki and Fahey',
        amount: '843.23'
      },
      {
        transaction_id: 80,
        purchase: 'Chair',
        type: 'Entertainment',
        store: 'Cartwright, Kerluke and Veum',
        amount: '95.12'
      },
      {
        transaction_id: 81,
        purchase: 'Mouse',
        type: 'Transportation',
        store: 'Feest, Hettinger and Ortiz',
        amount: '863.35'
      },
      {
        transaction_id: 82,
        purchase: 'Tuna',
        type: 'Housing',
        store: 'Hintz, Gibson and Bernhard',
        amount: '376.44'
      },
      {
        transaction_id: 83,
        purchase: 'Fish',
        type: 'Apparel',
        store: 'Donnelly - Ruecker',
        amount: '132.14'
      },
      {
        transaction_id: 84,
        purchase: 'Soap',
        type: 'Child Care & Education',
        store: 'Von - Mitchell',
        amount: '432.94'
      },
      {
        transaction_id: 85,
        purchase: 'Keyboard',
        type: 'Entertainment',
        store: 'Roberts, Ward and Harber',
        amount: '401.15'
      },
      {
        transaction_id: 86,
        purchase: 'Shoes',
        type: 'Food',
        store: 'Greenfelder Group',
        amount: '348.73'
      },
      {
        transaction_id: 87,
        purchase: 'Pizza',
        type: 'Miscellaneous',
        store: 'Jaskolski, Windler and Brekke',
        amount: '939.71'
      },
      {
        transaction_id: 88,
        purchase: 'Bacon',
        type: 'Housing',
        store: 'McClure Group',
        amount: '165.64'
      },
      {
        transaction_id: 89,
        purchase: 'Cheese',
        type: 'Miscellaneous',
        store: 'Hegmann LLC',
        amount: '336.89'
      },
      {
        transaction_id: 90,
        purchase: 'Bike',
        type: 'Entertainment',
        store: 'Olson and Sons',
        amount: '988.89'
      },
      {
        transaction_id: 91,
        purchase: 'Soap',
        type: 'Housing',
        store: 'Fay, Kulas and Becker',
        amount: '364.14'
      },
      {
        transaction_id: 92,
        purchase: 'Tuna',
        type: 'Food',
        store: 'Witting Group',
        amount: '443.32'
      },
      {
        transaction_id: 93,
        purchase: 'Chips',
        type: 'Housing',
        store: 'Schinner - Macejkovic',
        amount: '246.51'
      },
      {
        transaction_id: 94,
        purchase: 'Fish',
        type: 'Miscellaneous',
        store: 'Kiehn - Hansen',
        amount: '872.46'
      },
      {
        transaction_id: 95,
        purchase: 'Fish',
        type: 'Child Care & Education',
        store: 'Stamm Inc',
        amount: '439.17'
      },
      {
        transaction_id: 96,
        purchase: 'Shoes',
        type: 'Food',
        store: "D'Amore LLC",
        amount: '531.39'
      },
      {
        transaction_id: 97,
        purchase: 'Towels',
        type: 'Housing',
        store: 'Williamson, Gerhold and Moore',
        amount: '118.34'
      },
      {
        transaction_id: 98,
        purchase: 'Pants',
        type: 'Child Care & Education',
        store: 'Auer - Kuphal',
        amount: '901.75'
      },
      {
        transaction_id: 99,
        purchase: 'Computer',
        type: 'Child Care & Education',
        store: 'Marks - Quitzon',
        amount: '336.59'
      },
      {
        transaction_id: 100,
        purchase: 'Mouse',
        type: 'Housing',
        store: 'Adams, Schmidt and Rutherford',
        amount: '590.92'
      },
      {
        transaction_id: 1,
        name: 'Icolyn Jones',
        username: 'herring',
        purchase: 'Teddy Bear',
        type: 'Entertainment',
        store: "Toys' R Us",
        amount: 50.12
      },
      {
        transaction_id: 2,
        name: 'Alice Williams',
        username: 'blue_mahagony',
        purchase: 'Stove',
        type: 'Housing',
        store: 'P. C. Richards',
        amount: 133.45
      },
      {
        transaction_id: 3,
        name: 'Icolyn Jones',
        username: 'herring',
        purchase: 'Television',
        type: 'Entertainment',
        store: 'P.C. Richards',
        amount: 50.12
      },
      {
        transaction_id: 4,
        name: 'Jason Steegs',
        username: 'taboo',
        purchase: 'MacBook Air',
        type: 'Education',
        store: 'Apple Inc',
        amount: 765.88
      },
      {
        transaction_id: 5,
        purchase: 'Bike',
        type: 'Apparel',
        store: 'Willms Inc',
        amount: '836.84'
      },
      {
        transaction_id: 6,
        purchase: 'Shoes',
        type: 'Healthcare',
        store: 'Stanton, Harris and Pfannerstill',
        amount: '881.32'
      },
      {
        transaction_id: 7,
        purchase: 'Tuna',
        type: 'Entertainment',
        store: 'DuBuque - Balistreri',
        amount: '192.39'
      },
      {
        transaction_id: 8,
        purchase: 'Mouse',
        type: 'Apparel',
        store: 'Walker, Abshire and Schroeder',
        amount: '158.64'
      },
      {
        transaction_id: 9,
        purchase: 'Salad',
        type: 'Housing',
        store: 'Renner Group',
        amount: '625.63'
      },
      {
        transaction_id: 10,
        purchase: 'Pants',
        type: 'Child Care & Education',
        store: 'Osinski Group',
        amount: '737.94'
      },
      {
        transaction_id: 11,
        purchase: 'Chicken',
        type: 'Transportation',
        store: 'Gerlach Inc',
        amount: '450.36'
      },
      {
        transaction_id: 12,
        purchase: 'Ball',
        type: 'Healthcare',
        store: 'Durgan, Christiansen and Mitchell',
        amount: '975.80'
      },
      {
        transaction_id: 13,
        purchase: 'Pants',
        type: 'Housing',
        store: 'Conn - Williamson',
        amount: '839.90'
      },
      {
        transaction_id: 14,
        purchase: 'Gloves',
        type: 'Healthcare',
        store: 'Erdman and Sons',
        amount: '208.54'
      },
      {
        transaction_id: 15,
        purchase: 'Bike',
        type: 'Housing',
        store: 'Feest, Beier and Lindgren',
        amount: '266.04'
      },
      {
        transaction_id: 16,
        purchase: 'Keyboard',
        type: 'Miscellaneous',
        store: 'Schinner, Corkery and Swift',
        amount: '243.29'
      },
      {
        transaction_id: 17,
        purchase: 'Shirt',
        type: 'Housing',
        store: 'Runte, Runolfsdottir and Huel',
        amount: '870.68'
      },
      {
        transaction_id: 18,
        purchase: 'Pizza',
        type: 'Food',
        store: 'Zboncak, Mann and Schuppe',
        amount: '735.48'
      },
      {
        transaction_id: 19,
        purchase: 'Computer',
        type: 'Healthcare',
        store: 'Volkman, Maggio and Stamm',
        amount: '304.46'
      },
      {
        transaction_id: 20,
        purchase: 'Shirt',
        type: 'Housing',
        store: 'Hettinger, Paucek and Weissnat',
        amount: '845.96'
      },
      {
        transaction_id: 21,
        purchase: 'Shirt',
        type: 'Miscellaneous',
        store: 'Hyatt - Cole',
        amount: '274.21'
      },
      {
        transaction_id: 22,
        purchase: 'Cheese',
        type: 'Miscellaneous',
        store: 'Lang LLC',
        amount: '11.73'
      },
      {
        transaction_id: 23,
        purchase: 'Computer',
        type: 'Healthcare',
        store: 'Terry, Roob and Goodwin',
        amount: '669.57'
      },
      {
        transaction_id: 24,
        purchase: 'Tuna',
        type: 'Housing',
        store: 'Halvorson - Williamson',
        amount: '643.19'
      },
      {
        transaction_id: 25,
        purchase: 'Chicken',
        type: 'Apparel',
        store: 'Glover, Lindgren and Veum',
        amount: '301.00'
      },
      {
        transaction_id: 26,
        purchase: 'Chair',
        type: 'Apparel',
        store: 'Walsh Group',
        amount: '953.57'
      },
      {
        transaction_id: 27,
        purchase: 'Pants',
        type: 'Apparel',
        store: 'McClure - Miller',
        amount: '439.68'
      },
      {
        transaction_id: 28,
        purchase: 'Mouse',
        type: 'Apparel',
        store: 'Rutherford LLC',
        amount: '650.47'
      },
      {
        transaction_id: 29,
        purchase: 'Sausages',
        type: 'Transportation',
        store: 'Emard - Kihn',
        amount: '104.39'
      },
      {
        transaction_id: 30,
        purchase: 'Shirt',
        type: 'Food',
        store: 'McDermott Group',
        amount: '865.87'
      },
      {
        transaction_id: 31,
        purchase: 'Bacon',
        type: 'Entertainment',
        store: 'Crist - Prosacco',
        amount: '406.90'
      },
      {
        transaction_id: 32,
        purchase: 'Tuna',
        type: 'Housing',
        store: 'Hintz, Pollich and Fritsch',
        amount: '445.07'
      },
      {
        transaction_id: 33,
        purchase: 'Shoes',
        type: 'Miscellaneous',
        store: 'Treutel LLC',
        amount: '596.70'
      },
      {
        transaction_id: 34,
        purchase: 'Keyboard',
        type: 'Healthcare',
        store: 'Blanda - Streich',
        amount: '964.78'
      },
      {
        transaction_id: 35,
        purchase: 'Salad',
        type: 'Transportation',
        store: 'Rutherford - Hamill',
        amount: '271.49'
      },
      {
        transaction_id: 36,
        purchase: 'Towels',
        type: 'Housing',
        store: 'DuBuque, Klocko and Bergnaum',
        amount: '409.00'
      },
      {
        transaction_id: 37,
        purchase: 'Chicken',
        type: 'Entertainment',
        store: 'Hickle, Prohaska and Rath',
        amount: '51.36'
      },
      {
        transaction_id: 38,
        purchase: 'Gloves',
        type: 'Miscellaneous',
        store: 'Cassin - Considine',
        amount: '104.52'
      },
      {
        transaction_id: 39,
        purchase: 'Sausages',
        type: 'Healthcare',
        store: 'MacGyver, Rowe and Senger',
        amount: '210.16'
      },
      {
        transaction_id: 40,
        purchase: 'Chips',
        type: 'Transportation',
        store: 'Adams - Zboncak',
        amount: '666.09'
      },
      {
        transaction_id: 41,
        purchase: 'Chips',
        type: 'Transportation',
        store: 'Langworth - Kuhn',
        amount: '61.56'
      },
      {
        transaction_id: 42,
        purchase: 'Table',
        type: 'Miscellaneous',
        store: 'Dietrich - Morissette',
        amount: '806.34'
      },
      {
        transaction_id: 43,
        purchase: 'Keyboard',
        type: 'Apparel',
        store: 'Rosenbaum LLC',
        amount: '468.45'
      },
      {
        transaction_id: 44,
        purchase: 'Shirt',
        type: 'Miscellaneous',
        store: 'Ankunding, Daniel and Kuvalis',
        amount: '978.43'
      },
      {
        transaction_id: 45,
        purchase: 'Bacon',
        type: 'Apparel',
        store: 'Johns - Senger',
        amount: '687.75'
      },
      {
        transaction_id: 46,
        purchase: 'Chair',
        type: 'Miscellaneous',
        store: 'Konopelski, Rowe and Terry',
        amount: '479.81'
      },
      {
        transaction_id: 47,
        purchase: 'Keyboard',
        type: 'Food',
        store: 'Tillman, Harris and Waelchi',
        amount: '190.30'
      },
      {
        transaction_id: 48,
        purchase: 'Table',
        type: 'Food',
        store: 'Olson - Kirlin',
        amount: '198.58'
      },
      {
        transaction_id: 49,
        purchase: 'Pants',
        type: 'Child Care & Education',
        store: 'Swift, Hickle and Goldner',
        amount: '113.40'
      },
      {
        transaction_id: 50,
        purchase: 'Keyboard',
        type: 'Healthcare',
        store: 'Walter - Wolff',
        amount: '351.90'
      },
      {
        transaction_id: 51,
        purchase: 'Tuna',
        type: 'Transportation',
        store: 'Larson - Cummings',
        amount: '72.31'
      },
      {
        transaction_id: 52,
        purchase: 'Car',
        type: 'Child Care & Education',
        store: 'Haley - Trantow',
        amount: '614.60'
      },
      {
        transaction_id: 53,
        purchase: 'Shirt',
        type: 'Healthcare',
        store: 'Shanahan, Wintheiser and Kulas',
        amount: '163.86'
      },
      {
        transaction_id: 54,
        purchase: 'Table',
        type: 'Housing',
        store: 'Bartoletti - Aufderhar',
        amount: '322.48'
      },
      {
        transaction_id: 55,
        purchase: 'Chicken',
        type: 'Healthcare',
        store: 'Swift Group',
        amount: '940.81'
      },
      {
        transaction_id: 56,
        purchase: 'Computer',
        type: 'Apparel',
        store: 'Schiller and Sons',
        amount: '743.78'
      },
      {
        transaction_id: 57,
        purchase: 'Computer',
        type: 'Child Care & Education',
        store: 'Emard, Heidenreich and Dietrich',
        amount: '708.57'
      },
      {
        transaction_id: 58,
        purchase: 'Chicken',
        type: 'Transportation',
        store: 'Reilly - Kuhn',
        amount: '485.57'
      },
      {
        transaction_id: 59,
        purchase: 'Gloves',
        type: 'Apparel',
        store: 'Davis Inc',
        amount: '903.60'
      },
      {
        transaction_id: 60,
        purchase: 'Shirt',
        type: 'Food',
        store: 'Kuvalis - Jones',
        amount: '209.67'
      },
      {
        transaction_id: 61,
        purchase: 'Computer',
        type: 'Entertainment',
        store: 'Powlowski - Gutkowski',
        amount: '985.52'
      },
      {
        transaction_id: 62,
        purchase: 'Chicken',
        type: 'Transportation',
        store: 'Dicki - Bergstrom',
        amount: '825.10'
      },
      {
        transaction_id: 63,
        purchase: 'Chair',
        type: 'Entertainment',
        store: 'Flatley LLC',
        amount: '266.00'
      },
      {
        transaction_id: 64,
        purchase: 'Pants',
        type: 'Housing',
        store: 'Hansen, Muller and Prosacco',
        amount: '251.21'
      },
      {
        transaction_id: 65,
        purchase: 'Pizza',
        type: 'Miscellaneous',
        store: 'Romaguera, Cartwright and Lemke',
        amount: '347.52'
      },
      {
        transaction_id: 66,
        purchase: 'Computer',
        type: 'Apparel',
        store: 'Terry - Toy',
        amount: '356.96'
      },
      {
        transaction_id: 67,
        purchase: 'Ball',
        type: 'Housing',
        store: 'Graham LLC',
        amount: '143.22'
      },
      {
        transaction_id: 68,
        purchase: 'Car',
        type: 'Entertainment',
        store: 'Wyman Inc',
        amount: '536.95'
      },
      {
        transaction_id: 69,
        purchase: 'Ball',
        type: 'Healthcare',
        store: 'Leffler - Auer',
        amount: '619.44'
      },
      {
        transaction_id: 70,
        purchase: 'Pants',
        type: 'Child Care & Education',
        store: 'Larkin, Dickens and Powlowski',
        amount: '937.59'
      },
      {
        transaction_id: 71,
        purchase: 'Mouse',
        type: 'Entertainment',
        store: 'Macejkovic - Miller',
        amount: '653.61'
      },
      {
        transaction_id: 72,
        purchase: 'Towels',
        type: 'Healthcare',
        store: 'Rippin - Heidenreich',
        amount: '151.42'
      },
      {
        transaction_id: 73,
        purchase: 'Ball',
        type: 'Miscellaneous',
        store: 'Jaskolski, Kreiger and Tromp',
        amount: '249.49'
      },
      {
        transaction_id: 74,
        purchase: 'Mouse',
        type: 'Healthcare',
        store: 'Nikolaus, Leannon and Nader',
        amount: '655.59'
      },
      {
        transaction_id: 75,
        purchase: 'Mouse',
        type: 'Apparel',
        store: 'Turner LLC',
        amount: '995.31'
      },
      {
        transaction_id: 76,
        purchase: 'Soap',
        type: 'Apparel',
        store: 'Gleichner Inc',
        amount: '786.55'
      },
      {
        transaction_id: 77,
        purchase: 'Fish',
        type: 'Miscellaneous',
        store: 'Koss Group',
        amount: '119.13'
      },
      {
        transaction_id: 78,
        purchase: 'Pizza',
        type: 'Food',
        store: 'Kulas and Sons',
        amount: '370.44'
      },
      {
        transaction_id: 79,
        purchase: 'Salad',
        type: 'Housing',
        store: 'Lubowitz Inc',
        amount: '488.48'
      },
      {
        transaction_id: 80,
        purchase: 'Computer',
        type: 'Transportation',
        store: 'Cassin LLC',
        amount: '141.91'
      },
      {
        transaction_id: 81,
        purchase: 'Pants',
        type: 'Transportation',
        store: 'White Inc',
        amount: '751.33'
      },
      {
        transaction_id: 82,
        purchase: 'Chips',
        type: 'Healthcare',
        store: 'Wyman and Sons',
        amount: '454.18'
      },
      {
        transaction_id: 83,
        purchase: 'Chair',
        type: 'Food',
        store: 'Yundt - Collins',
        amount: '631.74'
      },
      {
        transaction_id: 84,
        purchase: 'Gloves',
        type: 'Transportation',
        store: 'Ruecker, Cronin and Reilly',
        amount: '528.03'
      },
      {
        transaction_id: 85,
        purchase: 'Tuna',
        type: 'Miscellaneous',
        store: 'Baumbach - Mohr',
        amount: '643.79'
      },
      {
        transaction_id: 86,
        purchase: 'Soap',
        type: 'Child Care & Education',
        store: 'Spinka - Harris',
        amount: '761.53'
      },
      {
        transaction_id: 87,
        purchase: 'Chicken',
        type: 'Apparel',
        store: 'McLaughlin and Sons',
        amount: '318.49'
      },
      {
        transaction_id: 88,
        purchase: 'Cheese',
        type: 'Food',
        store: 'Luettgen, Dicki and Schamberger',
        amount: '79.20'
      },
      {
        transaction_id: 89,
        purchase: 'Chips',
        type: 'Transportation',
        store: 'Romaguera - Jacobi',
        amount: '829.65'
      },
      {
        transaction_id: 90,
        purchase: 'Computer',
        type: 'Transportation',
        store: 'Harris - Vandervort',
        amount: '794.43'
      },
      {
        transaction_id: 91,
        purchase: 'Computer',
        type: 'Transportation',
        store: "D'Amore - Kemmer",
        amount: '300.29'
      },
      {
        transaction_id: 92,
        purchase: 'Shoes',
        type: 'Food',
        store: 'Hoeger Inc',
        amount: '10.09'
      },
      {
        transaction_id: 93,
        purchase: 'Cheese',
        type: 'Entertainment',
        store: 'Feeney, Batz and Krajcik',
        amount: '596.69'
      },
      {
        transaction_id: 94,
        purchase: 'Computer',
        type: 'Miscellaneous',
        store: 'Walsh and Sons',
        amount: '939.53'
      },
      {
        transaction_id: 95,
        purchase: 'Keyboard',
        type: 'Entertainment',
        store: 'Hickle and Sons',
        amount: '556.59'
      },
      {
        transaction_id: 96,
        purchase: 'Pants',
        type: 'Healthcare',
        store: 'Fahey LLC',
        amount: '67.33'
      },
      {
        transaction_id: 97,
        purchase: 'Ball',
        type: 'Entertainment',
        store: 'Torphy, Fadel and Conroy',
        amount: '701.56'
      },
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
      },
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
        },
        {
          transaction_id: 4,
          purchase: 'Keyboard',
          type: 'Food',
          store: 'Bogan, Greenfelder and Friesen',
          amount: '346.61'
        },
        {
          transaction_id: 5,
          purchase: 'Sausages',
          type: 'Food',
          store: 'Schulist and Sons',
          amount: '877.19'
        },
        {
          transaction_id: 6,
          purchase: 'Salad',
          type: 'Transportation',
          store: 'Weissnat LLC',
          amount: '699.11'
        },
        {
          transaction_id: 7,
          purchase: 'Gloves',
          type: 'Miscellaneous',
          store: 'Treutel and Sons',
          amount: '110.43'
        },
        {
          transaction_id: 8,
          purchase: 'Hat',
          type: 'Miscellaneous',
          store: 'Kertzmann, Ratke and Schroeder',
          amount: '354.57'
        },
        {
          transaction_id: 9,
          purchase: 'Pants',
          type: 'Food',
          store: 'Keebler LLC',
          amount: '567.49'
        },
        {
          transaction_id: 10,
          purchase: 'Tuna',
          type: 'Healthcare',
          store: 'Rutherford - Klocko',
          amount: '35.64'
        },
        {
          transaction_id: 11,
          purchase: 'Shoes',
          type: 'Miscellaneous',
          store: 'Murphy LLC',
          amount: '52.25'
        },
        {
          transaction_id: 12,
          purchase: 'Towels',
          type: 'Apparel',
          store: 'Tremblay, Waters and Lueilwitz',
          amount: '185.57'
        },
        {
          transaction_id: 13,
          purchase: 'Shirt',
          type: 'Housing',
          store: 'Mraz and Sons',
          amount: '781.66'
        },
        {
          transaction_id: 14,
          purchase: 'Ball',
          type: 'Food',
          store: 'Walker - Farrell',
          amount: '203.78'
        },
        {
          transaction_id: 15,
          purchase: 'Cheese',
          type: 'Healthcare',
          store: 'Barrows - Kuhlman',
          amount: '218.40'
        },
        {
          transaction_id: 16,
          purchase: 'Shirt',
          type: 'Entertainment',
          store: 'Ruecker - Bashirian',
          amount: '992.46'
        },
        {
          transaction_id: 17,
          purchase: 'Hat',
          type: 'Food',
          store: 'Renner Group',
          amount: '940.13'
        },
        {
          transaction_id: 18,
          purchase: 'Shoes',
          type: 'Transportation',
          store: 'Padberg Inc',
          amount: '44.53'
        },
        {
          transaction_id: 19,
          purchase: 'Pizza',
          type: 'Child Care & Education',
          store: 'Bode - Hickle',
          amount: '667.25'
        },
        {
          transaction_id: 20,
          purchase: 'Towels',
          type: 'Transportation',
          store: 'Kautzer - Hand',
          amount: '385.27'
        },
        {
          transaction_id: 21,
          purchase: 'Shirt',
          type: 'Miscellaneous',
          store: 'Leuschke - Kohler',
          amount: '269.71'
        },
        {
          transaction_id: 22,
          purchase: 'Pants',
          type: 'Food',
          store: 'Medhurst, Sanford and Cremin',
          amount: '232.84'
        },
        {
          transaction_id: 23,
          purchase: 'Tuna',
          type: 'Housing',
          store: 'Romaguera, Roberts and Friesen',
          amount: '441.10'
        },
        {
          transaction_id: 24,
          purchase: 'Salad',
          type: 'Housing',
          store: 'Oberbrunner Group',
          amount: '446.27'
        },
        {
          transaction_id: 25,
          purchase: 'Pants',
          type: 'Apparel',
          store: 'Stoltenberg and Sons',
          amount: '544.80'
        },
        {
          transaction_id: 26,
          purchase: 'Pizza',
          type: 'Transportation',
          store: 'Dicki, Cremin and Graham',
          amount: '171.27'
        },
        {
          transaction_id: 27,
          purchase: 'Tuna',
          type: 'Healthcare',
          store: 'Schuppe and Sons',
          amount: '75.47'
        },
        {
          transaction_id: 28,
          purchase: 'Chair',
          type: 'Healthcare',
          store: 'Kunze and Sons',
          amount: '892.41'
        },
        {
          transaction_id: 29,
          purchase: 'Chair',
          type: 'Miscellaneous',
          store: 'Macejkovic - Shields',
          amount: '552.43'
        },
        {
          transaction_id: 30,
          purchase: 'Chair',
          type: 'Entertainment',
          store: 'Mayert - Schimmel',
          amount: '168.21'
        },
        {
          transaction_id: 31,
          purchase: 'Hat',
          type: 'Entertainment',
          store: 'Beatty - White',
          amount: '642.37'
        },
        {
          transaction_id: 32,
          purchase: 'Table',
          type: 'Food',
          store: 'Rempel - Hand',
          amount: '627.72'
        },
        {
          transaction_id: 33,
          purchase: 'Tuna',
          type: 'Healthcare',
          store: 'Moen Inc',
          amount: '452.83'
        },
        {
          transaction_id: 34,
          purchase: 'Hat',
          type: 'Transportation',
          store: 'Ondricka and Sons',
          amount: '676.84'
        },
        {
          transaction_id: 35,
          purchase: 'Tuna',
          type: 'Miscellaneous',
          store: 'Hermann, Williamson and Brown',
          amount: '743.34'
        },
        {
          transaction_id: 36,
          purchase: 'Chair',
          type: 'Apparel',
          store: 'Corkery - Strosin',
          amount: '421.05'
        },
        {
          transaction_id: 37,
          purchase: 'Towels',
          type: 'Child Care & Education',
          store: 'Kunze, Reilly and Nienow',
          amount: '847.24'
        },
        {
          transaction_id: 38,
          purchase: 'Bacon',
          type: 'Entertainment',
          store: 'Zieme and Sons',
          amount: '467.01'
        },
        {
          transaction_id: 39,
          purchase: 'Tuna',
          type: 'Entertainment',
          store: 'Kuhn - Ledner',
          amount: '407.59'
        },
        {
          transaction_id: 40,
          purchase: 'Car',
          type: 'Child Care & Education',
          store: 'Smitham and Sons',
          amount: '423.49'
        },
        {
          transaction_id: 41,
          purchase: 'Mouse',
          type: 'Housing',
          store: 'Hermann Group',
          amount: '533.29'
        },
        {
          transaction_id: 42,
          purchase: 'Sausages',
          type: 'Miscellaneous',
          store: 'Rempel - Berge',
          amount: '766.42'
        },
        {
          transaction_id: 43,
          purchase: 'Tuna',
          type: 'Food',
          store: 'Hickle - King',
          amount: '37.71'
        },
        {
          transaction_id: 44,
          purchase: 'Soap',
          type: 'Transportation',
          store: 'Cremin, Towne and Schaefer',
          amount: '52.84'
        },
        {
          transaction_id: 45,
          purchase: 'Keyboard',
          type: 'Child Care & Education',
          store: 'Armstrong - Hills',
          amount: '914.86'
        },
        {
          transaction_id: 46,
          purchase: 'Mouse',
          type: 'Healthcare',
          store: 'Homenick - Cremin',
          amount: '117.68'
        },
        {
          transaction_id: 47,
          purchase: 'Keyboard',
          type: 'Child Care & Education',
          store: 'Kemmer - Hintz',
          amount: '16.95'
        },
        {
          transaction_id: 48,
          purchase: 'Chips',
          type: 'Miscellaneous',
          store: 'Lesch - Conroy',
          amount: '362.68'
        },
        {
          transaction_id: 49,
          purchase: 'Shirt',
          type: 'Entertainment',
          store: 'Franecki, Anderson and Terry',
          amount: '522.77'
        },
        {
          transaction_id: 50,
          purchase: 'Hat',
          type: 'Miscellaneous',
          store: 'Keebler - Adams',
          amount: '387.36'
        },
        {
          transaction_id: 51,
          purchase: 'Salad',
          type: 'Miscellaneous',
          store: 'Jacobi - Mayer',
          amount: '755.41'
        },
        {
          transaction_id: 52,
          purchase: 'Tuna',
          type: 'Transportation',
          store: 'Blanda - Witting',
          amount: '379.09'
        },
        {
          transaction_id: 53,
          purchase: 'Soap',
          type: 'Food',
          store: 'Keebler, Kunze and Gislason',
          amount: '261.55'
        },
        {
          transaction_id: 54,
          purchase: 'Computer',
          type: 'Child Care & Education',
          store: 'Vandervort, Davis and Pouros',
          amount: '165.00'
        },
        {
          transaction_id: 55,
          purchase: 'Cheese',
          type: 'Housing',
          store: 'Leffler, Streich and Koch',
          amount: '179.34'
        },
        {
          transaction_id: 56,
          purchase: 'Cheese',
          type: 'Transportation',
          store: 'Hoeger, Bergstrom and Sipes',
          amount: '550.37'
        },
        {
          transaction_id: 57,
          purchase: 'Tuna',
          type: 'Healthcare',
          store: 'Stark LLC',
          amount: '146.97'
        },
        {
          transaction_id: 58,
          purchase: 'Chips',
          type: 'Child Care & Education',
          store: 'Morar LLC',
          amount: '289.04'
        },
        {
          transaction_id: 59,
          purchase: 'Soap',
          type: 'Child Care & Education',
          store: 'Schmidt, Rolfson and Dickinson',
          amount: '535.06'
        },
        {
          transaction_id: 60,
          purchase: 'Shoes',
          type: 'Transportation',
          store: 'Cruickshank, Bednar and Leuschke',
          amount: '486.16'
        },
        {
          transaction_id: 61,
          purchase: 'Shoes',
          type: 'Entertainment',
          store: 'Wisozk, Okuneva and Renner',
          amount: '761.87'
        },
        {
          transaction_id: 62,
          purchase: 'Table',
          type: 'Child Care & Education',
          store: "Jacobson, O'Kon and Kilback",
          amount: '916.74'
        },
        {
          transaction_id: 63,
          purchase: 'Towels',
          type: 'Child Care & Education',
          store: 'Homenick - Howell',
          amount: '395.52'
        },
        {
          transaction_id: 64,
          purchase: 'Computer',
          type: 'Entertainment',
          store: "O'Conner LLC",
          amount: '477.26'
        },
        {
          transaction_id: 65,
          purchase: 'Shoes',
          type: 'Food',
          store: 'Rosenbaum Group',
          amount: '631.20'
        },
        {
          transaction_id: 66,
          purchase: 'Shoes',
          type: 'Entertainment',
          store: 'Padberg, Rohan and Barton',
          amount: '633.58'
        },
        {
          transaction_id: 67,
          purchase: 'Tuna',
          type: 'Child Care & Education',
          store: 'Jacobson Group',
          amount: '252.46'
        },
        {
          transaction_id: 68,
          purchase: 'Tuna',
          type: 'Miscellaneous',
          store: 'Stracke LLC',
          amount: '645.86'
        },
        {
          transaction_id: 69,
          purchase: 'Table',
          type: 'Miscellaneous',
          store: 'Torp Group',
          amount: '319.89'
        },
        {
          transaction_id: 70,
          purchase: 'Car',
          type: 'Housing',
          store: 'Brown - Reynolds',
          amount: '333.33'
        },
        {
          transaction_id: 71,
          purchase: 'Computer',
          type: 'Transportation',
          store: 'Greenholt, Feeney and Dooley',
          amount: '881.51'
        },
        {
          transaction_id: 72,
          purchase: 'Car',
          type: 'Housing',
          store: 'Lebsack Inc',
          amount: '20.02'
        },
        {
          transaction_id: 73,
          purchase: 'Ball',
          type: 'Food',
          store: 'Yost, Feest and Schmeler',
          amount: '150.90'
        },
        {
          transaction_id: 74,
          purchase: 'Tuna',
          type: 'Food',
          store: 'Rempel, Christiansen and Kling',
          amount: '804.14'
        },
        {
          transaction_id: 75,
          purchase: 'Ball',
          type: 'Child Care & Education',
          store: 'Labadie Inc',
          amount: '962.51'
        },
        {
          transaction_id: 76,
          purchase: 'Table',
          type: 'Apparel',
          store: 'Abshire - McCullough',
          amount: '523.91'
        },
        {
          transaction_id: 77,
          purchase: 'Shirt',
          type: 'Transportation',
          store: 'Hansen Group',
          amount: '629.72'
        },
        {
          transaction_id: 78,
          purchase: 'Cheese',
          type: 'Food',
          store: 'Renner - Marquardt',
          amount: '132.31'
        },
        {
          transaction_id: 79,
          purchase: 'Shoes',
          type: 'Miscellaneous',
          store: 'Emmerich - Gusikowski',
          amount: '611.30'
        },
        {
          transaction_id: 80,
          purchase: 'Gloves',
          type: 'Housing',
          store: 'Yundt and Sons',
          amount: '771.51'
        },
        {
          transaction_id: 81,
          purchase: 'Car',
          type: 'Healthcare',
          store: 'Aufderhar, Rippin and Frami',
          amount: '529.13'
        },
        {
          transaction_id: 82,
          purchase: 'Tuna',
          type: 'Child Care & Education',
          store: 'Wolf, Ledner and Bernhard',
          amount: '105.72'
        },
        {
          transaction_id: 83,
          purchase: 'Shoes',
          type: 'Transportation',
          store: 'Zemlak and Sons',
          amount: '950.09'
        },
        {
          transaction_id: 84,
          purchase: 'Car',
          type: 'Housing',
          store: 'Friesen Group',
          amount: '617.67'
        },
        {
          transaction_id: 85,
          purchase: 'Car',
          type: 'Miscellaneous',
          store: 'Kihn, Mann and Thiel',
          amount: '676.01'
        },
        {
          transaction_id: 86,
          purchase: 'Shoes',
          type: 'Apparel',
          store: 'Keebler - Miller',
          amount: '251.56'
        },
        {
          transaction_id: 87,
          purchase: 'Chicken',
          type: 'Child Care & Education',
          store: 'Daugherty, Douglas and Considine',
          amount: '625.03'
        },
        {
          transaction_id: 88,
          purchase: 'Keyboard',
          type: 'Food',
          store: 'Thiel LLC',
          amount: '988.76'
        },
        {
          transaction_id: 89,
          purchase: 'Bike',
          type: 'Healthcare',
          store: 'Oberbrunner, Abernathy and Kihn',
          amount: '910.59'
        },
        {
          transaction_id: 90,
          purchase: 'Keyboard',
          type: 'Apparel',
          store: 'Volkman - Feest',
          amount: '964.28'
        },
        {
          transaction_id: 91,
          purchase: 'Bacon',
          type: 'Entertainment',
          store: 'Bayer Group',
          amount: '783.62'
        },
        {
          transaction_id: 92,
          purchase: 'Hat',
          type: 'Transportation',
          store: 'Dare - Treutel',
          amount: '793.52'
        },
        {
          transaction_id: 93,
          purchase: 'Pizza',
          type: 'Housing',
          store: 'Borer, Batz and Kling',
          amount: '762.73'
        },
        {
          transaction_id: 94,
          purchase: 'Soap',
          type: 'Apparel',
          store: 'Stark, Schmeler and Cole',
          amount: '863.03'
        },
        {
          transaction_id: 95,
          purchase: 'Keyboard',
          type: 'Miscellaneous',
          store: 'Beahan - Terry',
          amount: '43.20'
        },
        {
          transaction_id: 96,
          purchase: 'Tuna',
          type: 'Entertainment',
          store: 'Goldner - Wuckert',
          amount: '381.12'
        },
        {
          transaction_id: 97,
          purchase: 'Table',
          type: 'Transportation',
          store: 'Koss LLC',
          amount: '650.94'
        },
        {
          transaction_id: 98,
          purchase: 'Soap',
          type: 'Housing',
          store: 'Ratke LLC',
          amount: '514.63'
        },
        {
          transaction_id: 99,
          purchase: 'Cheese',
          type: 'Food',
          store: 'McKenzie, Spinka and Weissnat',
          amount: '433.81'
        },
        {
          transaction_id: 100,
          purchase: 'Car',
          type: 'Apparel',
          store: 'Hagenes LLC',
          amount: '563.20'
        }
];

module.exports = commodities;