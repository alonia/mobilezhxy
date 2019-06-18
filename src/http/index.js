import HttpUtils from './http'
class Https {
  loginOn = (params) => HttpUtils.get('/security_/loginVerification.do',params)
  VerifyCode = () => HttpUtils.post('/security_/md5VerifyCode.do?usr=wtx')
  listBySelective = (params) =>  HttpUtils.get('/consumeOrder_/listBySelective.do',params)
  /* test = () => HttpUtils.get('https://www.easy-mock.com/mock/5c91fa198ac595145c45b946/example/mock') */
}
export default new Https()
