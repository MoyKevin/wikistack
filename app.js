var express = require('express')
var app = express()
var layout = require('./views/layout')
const {db} = require('./models');
const models = require('./models');

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send(layout('hellow world'));
  })
  
const PORT = 3000

const init = async () => {
    await models.db.sync()
    models.db.sync({force: true})
    
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}!`);
    })
}

init();

// app.listen(3000)