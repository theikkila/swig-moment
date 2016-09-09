var moment = require('moment-timezone');


module.exports = function (locale, timezone) {
  moment.locale(locale || 'en');
  return {
    date: function (d, format) {
      return moment(d).tz(timezone || "America/Los_Angeles").format(format)
    }
  }
}
