import { Response } from "express";

export const apiResponseSuccess = (
  res: Response,
  code: number,
  messages: string[],
  data: string[]
): Response => {
  return res.status(code).json({
    success: true,
    messages: messages,
    data: data,
  });
};

export const apiResponseFaild = (
  res: Response,
  code: number,
  messages: string[],
  data: string[]
): Response => {
  return res.status(code).json({
    success: true,
    messages: messages,
    data: data,
  });
};
