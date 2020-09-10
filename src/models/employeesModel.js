const sequelize = require("./../database/config");
const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "Employees",
  {
    employeeId: {
      field: "empId",
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    partyId: {
      field: "empPartySid",
      type: Sequelize.STRING,
    },
    lastName: {
      field: "empLastNm",
      type: Sequelize.STRING,
    },
    firstName: {
      field: "empFirstNm",
      type: Sequelize.STRING,
    },
    middleName: {
      field: "empMiddleNm",
      type: Sequelize.STRING,
      allowNull: true,
    },
    degree: {
      field: "empDegree",
      type: Sequelize.STRING,
    },
    status: {
      field: "empStatus",
      type: Sequelize.STRING,
    },
    hireDate: {
      field: "empHireDtm",
      type: Sequelize.DATE,
    },
    jobTitle: {
      field: "empJobTitle",
      type: Sequelize.STRING,
    },
    jobTitleCode: {
      field: "empJobTitleCode",
      type: Sequelize.STRING,
    },
    schedulePercentage: {
      field: "empSchedulePct",
      type: Sequelize.STRING,
    },
    scheduleType: {
      field: "empScheduleType",
      type: Sequelize.STRING,
    },
    scheduleHours: {
      field: "empScheduleHrs",
      type: Sequelize.INTEGER,
    },
    businessUnit: {
      field: "empBusUnit",
      type: Sequelize.STRING,
    },
    departmentId: {
      field: "empDeptID",
      type: Sequelize.STRING,
    },
    departmentDesc: {
      field: "empDeptDesc",
      type: Sequelize.STRING,
    },
    email: {
      field: "empEmail",
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    // freezeTableName: true,
  }
);
