import 'reflect-metadata';
import { CrawlerController, LoginController } from '../controller';

function getMethod(method: string) {
  return (path: string) => {
      return (prototype: CrawlerController | LoginController, name: string) => {
        Reflect.defineMetadata('path', path, prototype, name);
        Reflect.defineMetadata('method', method, prototype, name);
      };
    }
}

export const get = getMethod('get');
export const post = getMethod('post');
