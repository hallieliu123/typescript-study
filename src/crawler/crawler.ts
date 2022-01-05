import axios from 'axios';
import fs from 'fs';
import path from 'path';
// "dev": "concurrently 'npm run dev:build & npm run dev:start'"
// "dev": "concurrently npm:dev:*"

//1.get site source code
//2.manipulate dom to get specific data
//3.write the data into a file

export interface Course {
  title: string,
  count: number,
}
export interface Info {
  time: number,
  course: Course[]
}

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}
class Crawler {
  constructor(private url: string, private analyzer: Analyzer) {
    this._initSpiderProcess();
  }
  private async _getRawhtml() {
    const result = await axios.get(this.url);
    return result.data;
  }
  private _writeFile(content: string, filePath: string) {
    fs.writeFileSync(filePath, content);
  }
  
  private async _initSpiderProcess() {
    const filePath = path.resolve(__dirname, '../../data/course.json');
    const html = await this._getRawhtml();
    const data = this.analyzer.analyze(html, filePath);
    this._writeFile(data, filePath);
  }
}
export default Crawler;
