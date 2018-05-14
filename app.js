const express = require('express');
const F = require('./module/fibonacci.js');
const app = express();
let valor = 0;

app.get('/fibonacci/:n',  (req, res, next) => {
  F.fibonacci(Math.floor(req.params.n), (err, val) => {
    if (err) next('FIBO SERVER ERROR ' + err);
    else {
      res.send({
        n: req.params.n,
        result: val
      });
    }
  });
});

app.get('/', (req, res) => res.send(`Para ejecutar => host:port/fibonacci/:numero`));


app.listen(3000, () => console.log('Example app listening on port 3000!'));