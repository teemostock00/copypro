const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get("/introducation", (req, res) => res.render("introducation", {page: "introducation"}));
router.get("/signup", (req, res) => res.render("signup", {page: "signup"}));

module.exports = router;