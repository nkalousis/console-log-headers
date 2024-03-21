const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log("Request Headers:");
    console.log(req.headers);
    next();
});

app.get('/', (req, res) => {
    res.end();
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
