import { Request, Response, NextFunction } from 'express';
export interface BodyRequest extends Request {
  body: {[key: string]: string | undefined};
}
interface responseData {
  status: string,
  data?: object,
  errorMsg?: string
}
export const getResponseData = (status: string, data?: object, errorMsg?: string): responseData => {
  return {
    status,
    data,
    errorMsg
  }
};

export const checkLogin = (req: BodyRequest, res: Response, next: NextFunction) => {
  if (req.session && req.session.isLogin) {
    return next();
  }
  res.send(getResponseData('pls. login first'));
}
