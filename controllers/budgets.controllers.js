const faker = require('faker-js/faker');

for (let index = 1; index <= 10; index++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = firstName + lastName;

  // Email generation examples
  const email1 = `${username}@example.ca`;
  const email2 = `${firstName[0]}${lastName}@example.ca`;
  const email3 = `${username}@${faker.internet.domainName()}`;
  const email4 = `${firstName[0]}${lastName}@${faker.internet.domainName()}`;

  // You can generate random data for other fields using faker as well
  const password = faker.internet.password();

  console.log('Generated User:');
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Username:', username);
  console.log('Email 1:', email1);
  console.log('Email 2:', email2);
  console.log('Email 3:', email3);
  console.log('Email 4:', email4);
  console.log('Password:', password);
}