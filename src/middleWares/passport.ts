/* eslint-disable consistent-return */
import passport from 'passport';
import {
  Strategy as LocalStrategy,
} from 'passport-local';

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = JSON.parse(username);
    user.custid = user.custid ? user.custid : user.custId;
    user.fundid = user.fundid ? user.fundid : user.fundId;
    user.orgid = user.orgid ? user.orgid : user.orgId;
    user.phone = user.phone ? user.phone : user.phoneNum;
    // if(!user.uid) return done(null, false, {
    //   message: 'Invalid user'
    // })
    return done(null, user);
  } catch (error) {
    console.log('login error', error);
    done(error);
  }
}));

export function isAuthenticatedPage() {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect(req.app.locals.basePath);
  };
}

export function isAuthenticatedAPI() {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({
      error: '401 Unauthorized',
    });
  };
}

export default passport;
