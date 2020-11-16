const router = require("express").Router();
const partiesRoute = require("./parties");

// Party routes
router.use("/parties", partiesRoute);

module.exports = router;