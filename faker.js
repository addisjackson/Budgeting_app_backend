import faker from '@faker-js/faker';

const account = () => {
    return {
        account_id: faker.random.alphaNumeric(8),
        userName: faker.name.findName(),
        balance: faker.finance.amount(),
        account_number: faker.finance.account(),
        routing_number: faker.finance.routingNumber(),
        mask: faker.finance.mask(),
        type: faker.finance.accountName(),
    };
}

const createAccounts = (count) => {
    const accounts = [];
    for (let i = 0; i < count; i++) {
        accounts.push(account());
    }
    return accounts;
}

const createdAccounts = createAccounts(10);
console.log(createdAccounts);

const transaction = () => {
    return {
        transaction_id: faker.random.alphaNumeric(8),
        price: faker.finance.amount(),
        category: faker.finance.transactionType(),
        date: faker.date.past(),
        name: faker.commerce.productName(),
        desc: faker.commerce.productDescription(),
        pending: faker.random.boolean(),
        store: faker.company.companyName(),
    };
}

const createTransactions = (count) => {
    const transactions = [];
    for (let i = 0; i < count; i++) {
        transactions.push(transaction());
    }
    return transactions;
}

const createdTransactions = createTransactions(10);

export default {
    createdAccounts,
    createdTransactions
}