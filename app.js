const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public','views','index.html'));
  
});
app.listen(3000, function() {
  console.log(`Servidor iniciado en el puerto 3000`);
});

