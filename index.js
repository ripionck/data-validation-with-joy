const express = require("express");
const usersRoute = require("./routes/user");
const app = express();

const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", usersRoute);

app.get("/", (req, res) => {
  res.status(200).json("Hello API");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
