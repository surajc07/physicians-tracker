const sequelize = require("../database/config");
const Sequelize = require("sequelize");
const moment = require("moment");

module.exports = sequelize.define(
  "empComments",
  {
    employeeId: {
      field: "empId",
      type: Sequelize.INTEGER,
    },
    lastName: {
      field: "empLastNm",
      type: Sequelize.STRING,
    },
    firstName: {
      field: "empFirstNm",
      type: Sequelize.STRING,
    },
    message: {
      field: "empMessage",
      type: Sequelize.STRING,
    },
    createdAt: {
      field: "empCommentCreatedDtm",
      allowNull: false,
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      get: function () {
        return moment(this.getDataValue("createdAt"), "YYYY-MM-DD").fromNow();
      },
    },
    updatedAt: {
      field: "empCommentUpdatedDtm",
      allowNull: false,
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      get: function () {
        return moment(this.getDataValue("createdAt"), "YYYY-MM-DD").fromNow();
      },
    },
  },
  {
    // timestamps: false,
    freezeTableName: true,
  }
);
