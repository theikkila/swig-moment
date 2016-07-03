var moment = require('moment');




module.export = function (locale) {
  moment.locale(locale || 'en');
  return {
    date: function (d, format) {
      return moment(d).format(format)
    }
  }
}
