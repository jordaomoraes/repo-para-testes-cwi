const moment = require('moment');
// moment.suppressDeprecationWarnings = true;

class PocDataHora {

  async Testes() {

    const timestamp = "11:51:35.838Z";
    const date = moment.utc("11:51:35.838Z", "HH:mm:ss.SSSZ").format("HH:mm:ss");
    console.log(date);

  }
}

module.exports = new PocDataHora();


