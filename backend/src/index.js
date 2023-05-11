const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());
app.use('/components', express.static(path.join(__dirname, '..', '..','dist')));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});