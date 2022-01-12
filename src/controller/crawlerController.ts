import {Router, Request, Response, NextFunction} from 'express';
import { get, use, controller } from '../decorator';
import CustomAnalyzer from '../crawler/customAnalyzer';
import Crawler from '../crawler/crawler';
import { getResponseData, checkLogin, BodyRequest } from '../utils';
import fs from 'fs';
import Path from 'path';

@controller
export class CrawlerController {
  @get('/getdata')
  @use(checkLogin)
  getData(req: BodyRequest, res: Response) {
    try {
      const url = 'http://www.dell-lee.com/typescript/demo.html?secret=x3b174jsx';
      const analyzer = CustomAnalyzer.getIntance();
      new Crawler(url, analyzer);
      res.send(getResponseData('success'));
    }catch(err) {
      res.send(getResponseData('failed'));
    }
  }
  @get('/showdata')
  @use(checkLogin)
  showData(req: BodyRequest, res: Response) {
    const filePath = Path.resolve(__dirname, '../../data/course.json');
    const result = fs.readFileSync(filePath, 'utf8');
    res.send(JSON.parse(result));
  }
}

