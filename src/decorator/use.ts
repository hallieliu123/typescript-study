import 'reflect-metadata';
import { RequestHandler } from 'express';
import {CrawlerController, LoginController} from '../controller'

export function use(middleware: RequestHandler) {
  return (prototype: CrawlerController | LoginController, name: string): void => {
    const middlewares = Reflect.getMetadata('middlewares', prototype, name) || [];
    middlewares.push(middleware);
    Reflect.defineMetadata('middlewares', middlewares, prototype, name);
  };
}
