const wikiRouter = require('express').Router();
const addPage = require('../views/addPage')

wikiRouter.get('/', function (req, res) {
    res.send('retrieve all wiki pages');
  })

wikiRouter.post('/', function (req, res) {
    res.send('Make a post');
  })

wikiRouter.get('/add', function (req, res) {
    res.send(addPage());
  })

module.exports = (wikiRouter);
