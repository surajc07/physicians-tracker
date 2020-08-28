var express = require("express");
var app = express();
const cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  var sql = require("mssql");

  // config for your database
  var config = {
    user: "schalil1",
    password: "RADEmp123",
    server: "radsandbox.database.windows.net",
    database: "rad_dmart",
  };

  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query(
      "select E.*,T.empTaskId,T.empTaskCreatedDtm,T.empTaskName,T.empTaskStatus,T.empTaskUpdatedDtm from dbo.Employees E (nolock) left join dbo.empTasks T (nolock) on E.empId = T.empId",
      function (err, recordset) {
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
      }
    );
  });
});

var server = app.listen(5000, function () {
  console.log("Server is running..");
});
