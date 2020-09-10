const sequelize = require("./../database/config");
const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "employee",
  {
    id: {
      field: "EmployeeId",
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    partyId: {
      field: "PartyId",
      type: Sequelize.STRING,
    },
    lastName: {
      field: "LastName",
      type: Sequelize.STRING,
    },
    firstName: {
      field: "FirstName",
      type: Sequelize.STRING,
    },
    middleName: {
      field: "MiddleName",
      type: Sequelize.STRING,
      allowNull: true,
    },
    degree: {
      field: "Degree",
      type: Sequelize.STRING,
    },
    status: {
      field: "Status",
      type: Sequelize.STRING,
    },
    hireDate: {
      field: "HireDate",
      type: Sequelize.DATE,
    },
    jobTitle: {
      field: "JobTitle",
      type: Sequelize.STRING,
    },
    jobTitleCode: {
      field: "JobTitleCode",
      type: Sequelize.STRING,
    },
    schedulePercentage: {
      field: "SchedulePercentage",
      type: Sequelize.STRING,
    },
    scheduleType: {
      field: "ScheduleType",
      type: Sequelize.STRING,
    },
    scheduleHours: {
      field: "ScheduleHours",
      type: Sequelize.INTEGER,
    },
    businessUnit: {
      field: "BusinessUnit",
      type: Sequelize.STRING,
    },
    departmentId: {
      field: "DepartmentId",
      type: Sequelize.STRING,
    },
    departmentDesc: {
      field: "DepartmentDesc",
      type: Sequelize.STRING,
    },
    email: {
      field: "Email",
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
