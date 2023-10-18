const express = require('express');
const router = express.Router();
const jsonAccounts = require("../models/accounts.model.js");
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use((req, res, next) => {
    // Get the query parameters
    const { sort, filterType } = req.query;

    // Clone the original accounts array to avoid modifying the original data
    let sortedAndFilteredAccounts = [...jsonAccounts];

    // Handle sorting by amount (balance)
    if (sort === 'asc') {
        sortedAndFilteredAccounts.sort((a, b) => a.balance - b.balance);
    } else if (sort === 'desc') {
        sortedAndFilteredAccounts.sort((a, b) => b.balance - a.balance);
    }

    // Handle filtering by account type
    if (filterType) {
        sortedAndFilteredAccounts = sortedAndFilteredAccounts.filter(
            (account) => account.type.toLowerCase() === filterType.toLowerCase()
        );
    }

    // Update the response locals with the sorted and filtered accounts
    res.locals.sortedAndFilteredAccounts = sortedAndFilteredAccounts;

    next();
});

// Apply the sortAndFilterAccounts middleware to specific routes
router.get("/accounts", sortAndFilterAccounts, (req, res) => {
    // Use res.locals.sortedAndFilteredAccounts instead of jsonAccounts
    res.json(res.locals.sortedAndFilteredAccounts);
});

router.get("/accounts", (req, res) => {
    res.json(jsonAccounts);
});

router.get("/accounts/:accountId", (req, res) => {
    const accountId = parseInt(req.params.accountId);
    const account = jsonAccounts.find((acc) => acc.account_id === accountId);
    if (!account) {
        return res.status(404).json({ message: "Account not found" });
    } else {
        res.json(account);
    }
});

router.put("/accounts/:accountId", (req, res) => {
    const accountId = req.params.accountId;
    if (!jsonAccounts[accountId]) {
        jsonAccounts[accountId] = req.body;
        res.status(200).json(jsonAccounts[accountId]);
        console.log('Account updated');
    } else {
        res.status(404).json({ message: "Account not found" });
    }
});

router.delete("/accounts/:accountId", (req, res) => {
    const accountId = req.params.accountId;
    if (!jsonAccounts[accountId]) {
        res.status(404).json({ message: "Account not found" });
    } else {
        delete jsonAccounts[accountId];
        res.status(200).json({ message: "Account deleted" });
    }
});

router.post("/accounts", (req, res) => {
    const newAccount = req.body;

    function validateAccount(entry) {
        if (
            entry.account_id &&
            typeof entry.account_id === "string" &&
            typeof entry.userName === "string" &&
            typeof entry.balance === "number" &&
            typeof entry.account_number === "string" &&
            typeof entry.routing_number === "string" &&
            typeof entry.maskedNumber === "string" &&
            typeof entry.type === "string"
        ) {
            return true;
        } else {
            return false;
        }
    }

    if (!validateAccount(newAccount)) {
        return res.status(400).json({ message: "Invalid account data provided" });
    } else if (jsonAccounts.find((acc) => acc.account_id === newAccount.account_id)) {
        return res.status(400).json({ message: "Account already exists" });
    } else {
        const newAccountId = jsonAccounts.length;

        const newAccountObj = {
            accountId: newAccountId,
            account_id: newAccount.account_id,
            userName: newAccount.userName,
            balance: newAccount.balance,
            account_number: newAccount.account_number,
            routing_number: newAccount.routing_number,
            maskedNumber: newAccount.maskedNumber,
            type: newAccount.type
        };

        jsonAccounts.push(newAccountObj);
        return res.status(201).json({ status: 'OK', payload: newAccountObj, message: "Account created" });
    }
});

module.exports = router;
