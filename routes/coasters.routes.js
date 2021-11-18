const Coaster = require("../models/Coaster.model")
const Park = require("../models/Park.model")
const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {

    Coaster.find()
    .populate('park_id')
    .then(allCoasters => res.render("coasters/coaster-index", { allCoasters}))
    .catch(err => console.log(err))

});

////Crear
router.get("/new", (req, res) =>
Park.find()
.then(
    allParks => {
        res.render("coasters/new-coaster", {allParks})
    }
))




router.post("/create", (req, res) => {
  const { name, description,inversions,length, active, park} = req.body
console.log(req.body)
Coaster.create({ name, description,inversions,length, active, park})
    .then(() => res.redirect("/coasters"))
    .catch(err => console.log(err))
})


router.get("/:id", (req, res, next) => {

    Coaster.find()
    .then(allCoasters => res.render("coasters/coasters", { allCoasters}))
    .catch(err => console.log(err))

});
module.exports = router;