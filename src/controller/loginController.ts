import {Router, Request, Response, NextFunction} from 'express';
import { get, post, controller } from '../decorator';
import { getResponseData, BodyRequest } from '../utils';

@controller
export class LoginController {
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
            <a href="/getdata">爬取页面</a>
            <a href='/showdata'>展示爬取内容</a>
            <a href="/logout">退出登录</a>
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
        <form action="/login" method="post">
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
    res.redirect('/');
  }
  @post('/login')
  login(req: BodyRequest, res: Response) {
    const {password} = req.body;
    if(password === '111' && req.session) {
      req.session.isLogin = true;
      return res.send(getResponseData('success'));
    }
    res.send(getResponseData('login failed'));
  }
}
