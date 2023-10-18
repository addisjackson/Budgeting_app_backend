const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 8080;

dotenv.config();

app.listen(port, () => {
    console.log(`Budget App listening on port ${port}`);
})
