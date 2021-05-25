const express = require('express');
const PORT = process.env.PORT || '4000';
const app = express();
const routes = require('./api/routes')(app);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));