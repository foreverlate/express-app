const express = require('express');
const app = express();

app.get('/',(req, res) => {
        res.send({ msg: 'Hello World'});
        });


app.get('/users',(req, res) => {
        res.send({ name: 'Peter', age: 18});
        });



app.listen(3100,() => console.log(`Running on PORT: 3100`));
