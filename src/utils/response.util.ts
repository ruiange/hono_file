export const success = (data: any = null, message = '操作成功') => ({
  code: 0,
  message,
  data
})

export const fail = (code = 1, message = '操作失败', data: any = null) => ({
  code,
  message,
  data
})
