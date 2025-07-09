export const ERROR_CODES = (key: keyof typeof ERROR_CODES_MAP) => ERROR_CODES_MAP[key];

const ERROR_CODES_MAP = {
  INVALID_JSON: { code: 10001, message: '请求体必须为合法 JSON' },
  MISSING_PARAMS: { code: 10002, message: '缺少参数' },
  EMAIL_EXISTS: { code: 10003, message: '邮箱已注册' },
  USER_NOT_FOUND: { code: 10004, message: '用户不存在' },
  PASSWORD_INCORRECT: { code: 10005, message: '密码错误' }
}; 