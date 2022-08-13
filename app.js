const express = require('express');
const app = express();

app.get('/',(req, res) => {
        res.send({ msg: 'Hello'});
        });


app.get('/users',(req, res) => {
        res.send({ name: 'JJ', age: 18});
        });



app.listen(3100,() => console.log(`Running on PORT: 3100`));
