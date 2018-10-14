exports.getConcerts = (req, res, next) => {
  res.render('concerts', { title: 'Concerts' })
}
