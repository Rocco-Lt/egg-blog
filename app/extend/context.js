module.exports = {
  returnBody(status, message, data = {}, code) {
    this.status = status;
    this.body = {
      data,
      msg: message,
      code,
    };
  },
};
