const express = require("express");
const app = express();
const morgan = require("morgan");
app.set("port", process.env.PORT || 3000);

const candidatos = require("./routes/candidatos");
const valores = require("./routes/valores");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hola mundo");
});

//routes

app.use("/api/candidatos", candidatos);
app.use("/api/valores", valores);

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
