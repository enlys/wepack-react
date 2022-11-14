
import { Request, Response, NextFunction } from 'express';
import 'reflect-metadata'
import { controller, use, get, post } from '../common/decorator';
import log from '../middleWares/log';

@controller('/data')
class Data {
    @post('/hello')
    @use(log('hello'))
    public hello(req: Request, res: Response): void {
        res.send({
            code: 0,
            mesage: 'hello'
        });
    }
}

export default Data;