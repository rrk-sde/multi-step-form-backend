const express = require('express');
const cors = require('cors');
const app = express();
const formController = require('./controllers/formController');
const bodyParser = require('body-parser');

const database = require('./database');

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send({ courses: [1, 2, 3] });
    req.push('Hello World');
});

app.post('/add-form-data', formController.addFormData);


app.listen(3000, () => console.log('Server started on port 3000'));