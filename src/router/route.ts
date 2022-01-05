import {Router, Request, Response, NextFunction} from 'express';
import fs from 'fs';
import Path from 'path';
import Crawler from '../crawler/crawler';
import CustomAnalyzer from '../crawler/customAnalyzer';

const route = Router();

interface BodyRequest extends Request {
  body: {[key: string]: string | undefined};
}

interface responseData {
  status: string,
  data?: object,
  errorMsg?: string
}

const getResponseData = (status: string, data?: object, errorMsg?: string): responseData => {
  return {
    status,
    data,
    errorMsg
  }
};

route.get('/', (req, res) => {
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
});

route.post('/login', (req: BodyRequest, res: Response) => {
  const {password} = req.body;
  if(password === '111' && req.session) {
    req.session.isLogin = true;
    return res.send(getResponseData('success'));
  }
  res.send(getResponseData('login failed'));
});
route.get('/logout', (req: BodyRequest, res: Response) => {
  req.session = null;
  res.redirect('/');
});
const checkLogin = (req: BodyRequest, res: Response, next: NextFunction) => {
  if (req.session && req.session.isLogin) {
    return next();
  }
  res.send(getResponseData('pls. login first'));
}
route.get('/getdata', checkLogin, (req: BodyRequest, res: Response) => {
  try {
    const url = 'http://www.dell-lee.com/typescript/demo.html?secret=x3b174jsx';
    const analyzer = CustomAnalyzer.getIntance();
    new Crawler(url, analyzer);
    res.send(getResponseData('success'));
  }catch(err) {
    res.send(getResponseData('failed'));
  }
});
route.get('/showdata', checkLogin, (req: BodyRequest, res: Response) => {
  const filePath = Path.resolve(__dirname, '../../data/course.json');
  const result = fs.readFileSync(filePath, 'utf8');
  res.send(JSON.parse(result));
});

export default route;