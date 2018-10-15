const User = require('../models/User')

exports.getManage = (req, res, next) => {
  User.findOne(req.user._id, function(err, user) {
    res.render('manage', { user, title: 'Manage Store' })
  })
}

exports.updateStore = (req, res, next) => {
  User.findOneAndUpdate(
    req.user._id,
    {
      storeName: req.body.storeName,
      storeBio: req.body.storeBio
    },
    function(err, user) {
      res.redirect('/manage')
    }
  )
}
