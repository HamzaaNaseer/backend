const router = require("express").Router();
const dataRoutes = require("./api/dataset");

router.use("/data", dataRoutes);

module.exports = router;
