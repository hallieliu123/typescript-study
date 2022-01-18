import { Request, Response, NextFunction } from 'express';
export interface BodyRequest extends Request {
  body: {[key: string]: string | undefined};
}
interface responseData<T> {
  info: T,
  data?: string,
  errorMsg?: string
}
export const getResponseData = <T>(info: T, data?: string, errorMsg?: string): responseData<T> => {
  return {
    info,
    data,
    errorMsg
  }
};

export const checkLogin = (req: BodyRequest, res: Response, next: NextFunction) => {
  if (req.session && req.session.isLogin) {
    return next();
  }
  res.send(getResponseData(false, 'pls. login first'));
}
