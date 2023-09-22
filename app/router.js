'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/loginIn', controller.login.loginIn);
  router.get('/getUserInfo', controller.login.getUserInfo);
};
