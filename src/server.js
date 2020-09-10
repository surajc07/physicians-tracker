var express = require("express");
var http = require("http");
var app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// const Sequelize = require("sequelize");
const Employees = require("./models/employeesModel");
const Comments = require("./models/commentsModel");
const { response } = require("express");

// const pino = require("express-pino-logger")();
// const path = require("path");

app.use(cors());
app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//     limit: "100mb",
//     parameterLimit: 1000000,
//   })
// );
// app.use(pino);

// app.use(express.static(path.join(__dirname, "..", "build")));
// app.use(express.static(path.join(__dirname, "..", "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

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
// gets all results in Comments based on employee id
app.get("/api/comments", async (req, res, next) => {
  let filter = {};
  let { q } = req.query;

  if (q) {
    filter = {
      where: {
        employeeId: q,
      },
      order: [["createdAt", "DESC"]],
    };
  }
  try {
    Comments.findAll(filter).then((comments) => {
      res.send(comments);
    });
  } catch (err) {
    next(err);
  }
});
// adds new comment for an employe on the detail info page
app.post("/api/comments", async (req, res, next) => {
  Comments.create({
    employeeId: req.body.comment.employeeId,
    lastName: req.body.comment.lastName,
    firstName: req.body.comment.firstName,
    message: req.body.comment.message,
    createdAt: req.body.comment.createdAt,
  })
    .then((comment) => {
      if (comment) {
        res.json(comment);
      } else {
        res.status(400).send("Error in insert new record");
      }
    })
    .catch(next);
});

// updates employee table based on id, will be used for Edit Profile
app.put("/api/employees/:employeeId", async (req, res, next) => {
  Employees.update({
    partyId: req.body.partyId,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    degree: req.body.degree,
    status: req.body.status,
    hireDate: req.body.hireDate,
    jobTitle: req.body.jobTitle,
    jobTitleCode: req.body.jobTitleCode,
    where: req.params.employeeId,
  })
    .then((rowsUpdated) => {
      if (rowsUpdated) {
        res.json(rowsUpdated);
      } else {
        res.status(400).send("Error in updating employee");
      }
    })
    .catch(next);
});

const PORT = process.env.REACT_APP_API_PORT || 5000;

app.set("port", PORT);

http.createServer(app).listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});

// app.listen(PORT, function () {
//   console.log(`Server is running on port ${PORT}`);
// });
