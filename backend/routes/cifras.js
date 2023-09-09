const router = require("express").Router()

const cifraController = require("../controllers/cifraController")

router.route("/cifras").post((req, res) => cifraController.create(req, res))
router.route("/cifras").get((req, res) => cifraController.getAll(req, res))

module.exports = router;