"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiResponseFaild = exports.apiResponseSuccess = void 0;
const apiResponseSuccess = (res, code, messages, data) => {
    return res.status(code).json({
        success: true,
        messages: messages,
        data: data,
    });
};
exports.apiResponseSuccess = apiResponseSuccess;
const apiResponseFaild = (res, code, messages, data) => {
    return res.status(code).json({
        success: true,
        messages: messages,
        data: data,
    });
};
exports.apiResponseFaild = apiResponseFaild;
