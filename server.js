const express = require('express');

let app = express();
const PORT = process.env.PORT || 3030;

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Express server is up on port ${PORT}`);
});