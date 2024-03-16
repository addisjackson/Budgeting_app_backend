const plaid = require('plaid');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.get 