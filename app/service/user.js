
const { Service } = require('egg');
class UserService extends Service {

  async login(user) {
    const { app } = this;
    // 校验登录名和登陆密码
  }
}

module.exports = UserService;
