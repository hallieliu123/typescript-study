
//1/搭建express服务器
//2/创建爬虫接口
//3/展示接口
//4/登录功能
//5/登出功能
//7/优化一下
import express from 'express';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import './controller';
import { router } from './decorator';

const app = express();
app.use(cookieSession({
  name: 'session',
  keys: [''],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

app.listen(3000, () => {
  console.log('server running');
});
