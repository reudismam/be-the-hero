const express = require('express');
const cors = require('cors');
const routes = require('./routes');

var bodyParser = require('body-parser')
var app = express()
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(routes);

//app.use(express.json);

/*app.get('/', (request, response) => {
  // response.send("Hello World");
  //const params = request.params;

  //console.log(params);
  
  return response.json({
      evento: "Semana Omnistack 11.0",
      aluno: "Reudismam Rolim de Sousa",
  });
});*/

app.listen(3333, function() {
	console.log('Ouvindo na porta 3333!');
});