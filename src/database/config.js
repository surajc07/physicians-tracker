const { Sequelize } = require("sequelize");

// Override timezone formatting
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);

  // Z here means current timezone, _not_ UTC
  // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
  return date.format("YYYY-MM-DD HH:mm:ss.SSS");
};

module.exports = new Sequelize("rad_dmart", "schalil1", "RADEmp123", {
  dialect: "mssql",
  host: "radsandbox.database.windows.net",
  operatorsAliases: 0,
  dialectOptions: {
    encrypt: true,
    requestTimeout: 30000, // timeout = 30 seconds
  },
});
