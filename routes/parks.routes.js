const Park = require("../models/Park.model")
const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {

  Park.find()
    .then(allParks => res.render("parks/parks", { allParks }))
    .catch(err => console.log(err))

});

////Crear
router.get("/new", (req, res) => res.render("parks/new-park"))


router.post("/create", (req, res) => {
  const { name, description } = req.body
console.log(req.body)
  Park.create({ name, description})
    .then(() => res.redirect("/parks"))
    .catch(err => console.log(err))
})


module.exports = router;