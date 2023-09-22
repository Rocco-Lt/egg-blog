'use strict';
const { Controller } = require('egg');
const jwt = require('jsonwebtoken');
class LoginController extends Controller {

    // returnBody(status, message, data = {}) {
    //     this.status = status;
    //     this.body = {
    //         data,
    //         message,
    //         success: true,
    //     },
    // }

    async loginIn() {
        const { ctx, app } = this;
        // eslint-disable-next-line no-debugger
        console.log(ctx);
        const { username, password } = ctx.request.body;
        console.log(ctx.returnBody);
        console.log(ctx.params);
        console.log(ctx.request.query);
        try {
            if (username !== 'admin' || password !== '000000') {
                ctx.returnBody(200, '账号错误', '', 500);
            } else {
                const token = jwt.sign({ username, password }, 'username', { expiresIn: '7d' });
                // this.returnBody(200, '登陆成功', token);
                ctx.returnBody(200, '登陆成功', { token });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getUserInfo() {
        const { ctx } = this;
        const menuList = [{
            icon: '',
            name: '首页',
            key: '/home',
        },
        {
            icon: '',
            name: '组件',
            key: '/compoment',
        },
        {
            icon: '',
            name: '个人博客21',
            key: '/home',
        }];
        try {
            ctx.returnBody(200, '请求成功', { menuList });
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = LoginController;
