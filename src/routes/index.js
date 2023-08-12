const { Router } = require("express");

const route = Router();

route.get("/test", (req, res) => {
  res.status(200).json({ error: false, message: "All ok" });
});

/* localhost:3000/api/[]-user */
route.use(require("./user"));

/* localhost:3000/api/login */
route.use(require("./login"));

/* localhost:3000/api/[]-client */
route.use(require("./client"));

module.exports = route;
