const wikiRouter = require('express').Router();
const addPage = require('../views/addPage');
const {Page} = require('../models/');


wikiRouter.get('/', function (req, res) {
    res.send('retrieve all wiki pages');
  })

wikiRouter.post('/', async (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const title = req.body.title;
    const content = req.body.content;
    const status = req.body.status;
    const page = new Page({
      title: title,
      content: content
    })
    console.log(email,name,title,content,status);
    try{
      await page.save();
      res.redirect('/');
    }catch(error){next:error}
  })

wikiRouter.get('/add', function (req, res) {
    res.send(addPage());
  })

module.exports = (wikiRouter);
