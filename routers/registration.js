const express = require("express");
const registrationController = require("../controller/registration");
const router = express.Router();

router.post('/v1', registrationController.doRegistration);

module.exports = router;