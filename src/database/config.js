const Sequelize = require("sequelize");

module.exports = new Sequelize("rad_dmart", "schalil1", "RADEmp123", {
  dialect: "mssql",
  host: "radsandbox.database.windows.net",
  operatorsAliases: 0,
  dialectOptions: {
    encrypt: true,
    requestTimeout: 30000, // timeout = 30 seconds
  },
});
