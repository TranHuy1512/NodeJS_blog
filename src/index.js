const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");

//Connect to Database
const db = require("./config/db")
db.connect();

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Khởi tạo routes
route(app);

// Lắng nghe cổng
app.listen(port, () =>
  console.log(`Listening: http://localhost:${port}`)
);
