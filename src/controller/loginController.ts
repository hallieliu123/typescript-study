import {Router, Request, Response, NextFunction} from 'express';
import { get, post, controller } from '../decorator';
import { getResponseData, BodyRequest } from '../utils';

@controller('/api')
export class LoginController {
  @get('/isloggedin')
  isLogin(req: BodyRequest, res: Response) {
    const isLogin = !!(req.session?.isLogin);
    const result = getResponseData<responseResult.isloggedin>(isLogin);
    res.send(result);
  }
  @get('/')
  home(req: BodyRequest, res: Response) {
    if(req.session && req.session.isLogin) {
      return res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Document</title>
        </head>
        <body>
          <div>
            <a href="/api/getdata">爬取页面</a>
            <a href='/api/showdata'>展示爬取内容</a>
            <a href="/api/logout">退出登录</a>
          </div>
        </body>
        </html>
      `);
    }
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
      <body>
        <form action="/api/login" method="post">
          <input type="password" name="password" />
          <button type="submit">提交</button>
        </form>
      </body>
      </html>
    `);
  }
  @get('/logout')
  logout(req: BodyRequest, res: Response) {
    req.session = null;
    // res.redirect('/');
    res.send(getResponseData<responseResult.logout>(true));
  }
  @post('/login')
  login(req: BodyRequest, res: Response) {
    const {password} = req.body;
    if(password === '111' && req.session) {
      req.session.isLogin = true;
      const result = getResponseData<responseResult.login>(true, 'success');
      return res.send(result);
    }
    res.send(getResponseData<responseResult.login>(false, 'login failed'));
  }
}
