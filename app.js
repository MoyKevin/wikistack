var express = require('express')
var app = express()
var layout = require('./views/layout')
const {db} = require('./models');
const models = require('./models');
const userRouter = require('./routes/user');
const wikiRouter = require('./routes/wiki');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wikiRouter);


app.get('/', function (req, res) {
    res.redirect('/wiki');
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
