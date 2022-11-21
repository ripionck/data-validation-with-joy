const express = require("express");
const { userRegister, userLogin } = require("../controllers/user");
const { runValidation } = require("../validation");
const { schemas } = require("../validation/schemas");
const router = express.Router();

///api/register
router.post("/register", runValidation(schemas.registerSchema), userRegister);

///api/login
router.post("/login", runValidation(schemas.loginSchema), userLogin);

module.exports = router;
