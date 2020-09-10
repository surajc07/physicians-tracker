const express = require("express");

const app = express();

const PORT = process.env.REACT_APP_API_PORT || 5000;
app.listen(PORT);
