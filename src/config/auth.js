import { Strategy } from 'passport-local'
import { User } from '~/models'

export default (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser(async (id, done) => {
    User.findById(id, done)
  })

  passport.use(new Strategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email }).exec()
      const isAuth = await user.validatePassword(password)

      if (isAuth) {
        done(null, user)
      } else {
        done(null, false)
      }
    } catch (err) {
      done(err)
    }
  }))
}
