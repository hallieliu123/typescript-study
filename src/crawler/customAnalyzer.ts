import cheerio from 'cheerio';
import fs from 'fs';
import { Analyzer, CourseItem, CourseData } from './crawler';

export default class CustomAnalyzer implements Analyzer {
  private static _instance: CustomAnalyzer; // 必须加static, 否则一直提示没有assign数据
  private constructor() {}
  static getIntance() {
    if (!this._instance) {
      this._instance = new CustomAnalyzer();
    }
    return this._instance;
  }
  private _getInfo(html: string): CourseData {
    const info: CourseItem[] = [];
    const $ = cheerio.load(html);
    $('.course-item').map((index, el) => {
      const title = $(el).find('.course-desc').eq(0).text();
      const count = parseInt($(el).find('.course-desc').eq(1).text().split('：')[1], 10);
      info.push({title, count});
    });
    return {time: new Date().getTime(), course: info};
  }
  private _concatInfo(info: CourseData, filePath: string): CourseData[] {
    let data: CourseData[] = [];
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    data.push(info);
    return data;
  }
  public analyze(html: string, filePath: string): string {
    const info = this._getInfo(html);
    return JSON.stringify(this._concatInfo(info, filePath));
  }
}
