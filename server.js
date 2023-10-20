const app = require('./app');
const express = require('express');



require('dotenv').config();
const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Budget App listening on port ${port}`);
});
