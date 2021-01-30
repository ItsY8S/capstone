const User = require('../models/User')
const passportLocal = require('../auth/local')
const protect = require('connect-ensure-login').ensureLoggedIn
const { check, validationResult } = require('express-validator/check')

exports.loginRender = (req, res, next) => {
  res.render('login')
}

exports.login = passportLocal.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/'
})

exports.signupRender = (req, res, next) => {
  res.render('signup')
}

exports.checkLength = [
  check(
    'username',
    'Invalid Username. Must be minimum of 5 characters.'
  ).isLength({ min: 5 }),
  check(
    'password',
    'Invalid Password. Must be between 4 and 15 characters.'
  ).isLength({ min: 4, max: 15 })
]

exports.signup = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.redirect('/signup')
  }
  require('bcrypt').hash(req.body.password, 10, (err, pass) => {
    const user = new User({
      username: req.body.username,
      password: pass
    })
    user.save((err, user) => {
      if (err) return res.redirect('/signup')
      passportLocal.authenticate('local', { failureRedirect: '/signup' })(
        req,
        res,
        () => {
          res.redirect('/')
        }
      )
    })
  })
}

exports.logout = (req, res, next) => {
  req.logout()
  res.redirect('/login')
}
