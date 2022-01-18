import {Router, Request, Response, NextFunction} from 'express';
import { get, use, controller } from '../decorator';
import CustomAnalyzer from '../crawler/customAnalyzer';
import Crawler from '../crawler/crawler';
import { getResponseData, checkLogin, BodyRequest } from '../utils';
import fs from 'fs';
import Path from 'path';

@controller('/api')
export class CrawlerController {
  @get('/getdata')
  @use(checkLogin)
  getData(req: BodyRequest, res: Response) {
    try {
      const url = 'http://www.dell-lee.com/typescript/demo.html?secret=x3b174jsx';
      const analyzer = CustomAnalyzer.getIntance();
      new Crawler(url, analyzer);
      res.send(getResponseData<responseResult.getdata>(true, 'success'));
    }catch(err) {
      res.send(getResponseData<responseResult.getdata>(false, 'failed'));
    }
  }
  @get('/showdata')
  @use(checkLogin)
  showData(req: BodyRequest, res: Response) {
    const filePath = Path.resolve(__dirname, '../../data/course.json');
    const result: responseResult.showdata = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.send(getResponseData<responseResult.showdata>(result));
  }
}
