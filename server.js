const express = require('express');

let app = express();

app.use(express.static('public'));

app.listen(3030, () => {
    console.log('Express server is up on port 3030');
});