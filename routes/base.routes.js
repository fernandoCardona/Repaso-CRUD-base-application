const router = require("express").Router();
const Park = require("../models/Park.model")
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



module.exports = router;
