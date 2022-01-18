import 'reflect-metadata';
import express, { RequestHandler } from 'express';
export const router = express.Router();

enum Methods {
  post = 'post',
  get = 'get',
}


export function controller(url: string) {
  return function<T extends new (...args: any[])=> any>(target: T) {
    for(let name in target.prototype) {
      const handler = target.prototype[name];
      const method: Methods = Reflect.getMetadata('method', target.prototype, name);
      const path = Reflect.getMetadata('path', target.prototype, name);
      const middlewares = Reflect.getMetadata('middlewares', target.prototype, name);
      if (middlewares && middlewares.length) {
        router[method](`${ url }${ path }`, ...middlewares, handler);
      } else {
        router[method](`${ url }${ path }`, handler);
      }
    }
  }
}
