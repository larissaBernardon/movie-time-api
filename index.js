const express = require('express');
const app = express();
const port = 3000;
const movieController = require('./controller/movieController');

app.get('/movies', movieController.list)

app.listen(port, () => console.log(`App listening on port ${port}!`))