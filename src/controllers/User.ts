
import { Request, Response, NextFunction } from 'express';
import 'reflect-metadata'
import { controller, use, get, post } from '../common/decorator';
import passport, { isAuthenticatedAPI } from '../middleWares/passport';

@controller('/user')
class Data {
    @post('/login')
    public login(req, res: Response, next: NextFunction): void {
      passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json(info);
        req.logIn(user, error => {
          if (err) return next(error);
          res.json(user);
        });
      })(req, res, next);
    }

    @post('/logout')
    @use(isAuthenticatedAPI())
    public logout(req, res: Response, next: NextFunction): void {
      req.logout();
      res.json({
        code: 0,
        message: 'success',
      });
    }

    @get('/userInfo')
    @use(isAuthenticatedAPI())
    public getUser(req, res: Response, next: NextFunction): void {
      res.json({
        code: 0,
        message: req.user,
      });
    }
}

export default Data;