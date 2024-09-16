import { Response } from 'express'
type TResponseData<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: TMeta;
  data: T;
}
type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
const sendResponse = <T>(res: Response, data: TResponseData<T>) => {
  res.status(data?.statusCode).json({
    success:data?.success,
    message: data?.message,
    meta: data?.meta,
    data: data?.data,
  })
}
export default sendResponse
