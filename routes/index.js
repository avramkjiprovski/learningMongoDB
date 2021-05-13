var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
let currentCard = 0;


// console.log("Index.js started...")

mongoose.connect('mongodb://localhost:27017/flashCards', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR!", err)
    })

const fcSchema = new mongoose.Schema({ // schema
    title: {
      type: String,
      required: true
    },
    frontContent: {
      type: String,
      required: true
    },
    backContent:{
      type: String,
      required: true
    },
    frontSide: {
      type: Boolean,
      default: true
    }
})

const Card = mongoose.model('Card', fcSchema)

Card.find().then(data => allCards = data)// vaka gi citam site objekti, i bi mozel da gi prefrlam vo promenliva?


/* GET home page. */
router.get('/', function(req, res, next) {
  Card.find()
    .then( (cards) => {
      res.render('index', { cards, currentCard });
    })
})
.get('/next', (req, res) => {
  

  Card.find()
    .then( (cards) => {
      if(cards[currentCard+1]) currentCard++
      res.render('index', { cards, currentCard });
    })
})
.get('/prev', (req, res) => {

  Card.find()
    .then( (cards) => {
      if(cards[currentCard-1]) currentCard--
      res.render('index', { cards, currentCard });
    })
})
.get('/flip', (req, res)=>{
  Card.find()
    .then( (cards) => {
      if(cards[currentCard].frontSide) Card.updateOne({_id:cards[currentCard]._id }, {frontSide: false}).then(
        res.render('index', { cards, currentCard })
      )
      else Card.updateOne({_id:cards[currentCard]._id }, {frontSide: true}).then(
        res.render('index', { cards, currentCard })
      )
    })
})


module.exports = router;
