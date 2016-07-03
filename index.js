var moment = require('moment');




module.exports = function (locale) {
  moment.locale(locale || 'en');
  return {
    date: function (d, format) {
      return moment(d).format(format)
    }
  }
}
