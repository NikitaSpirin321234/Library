var express = require('express');
var router = express.Router();

const books = require('../books');

/* GET users listing. */

router.get('/:id([0-9]{1,})', function(req, res){
  console.log(books);
  const book = books.books.filter(function(b){
    if(b.id === req.params.id) {
      // res.end(`Name is ${b.id}`);
      return true;
    }
  });

  console.log(book);
  // return book;
  res.end(`Name is ${book[0].id}`);
  // next();
});

router.get('/', function(req, res, next) {
  res.json(books);
});



module.exports = router;
