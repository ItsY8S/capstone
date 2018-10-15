const passportLocal = require('../auth/local')
const User = require('../models/User')
const Concert = require('../models/Concert')

exports.getConcerts = (req, res, next) => {
  Concert.find({ _owner: req.user._id }, function(err, concerts) {
    console.log('herhe', concerts)
    res.render('concerts', { concerts, title: 'Concerts' })
  })
}

exports.addConcert = (req, res, next) => {
  User.findOne(req.user._id, function(err, user) {
    const concert = new Concert({
      date: req.body.date,
      location: req.body.location,
      venue: req.body.venue,
      _owner: req.user._id
    })
    concert.save((err, concert) => {
      if (err) return err
      res.redirect('/concerts')
    })
    // res.redirect('/concerts')
  })
}

exports.getConcertById = (req, res, next) => {
  Concert.findById(
    req.params.id,
    req.body,
    { new: true, upsert: true },
    function(err, concert) {
      if (err) return err
      res.render('concert-details', { concert, title: 'Concert Details' })
    }
  )
}
