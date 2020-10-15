const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
      },
      async (profile, done) => {
          const existingUser = await User.findOne({ googleId: profile.id });

          if(existingUser) {
            return done(null, existingUser);
          } 
            const user = await new User({ googleId: profile.id, userDisplayName: profile.displayName }).save()
            done(null, user);
      }
    )
  );