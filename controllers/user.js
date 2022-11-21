const Joi = require("joi");

const userRegister = (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob,
      age: req.body.age,
      languages: req.body.languages,
    };
    return res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    return res.send(error.message);
  }
};

const userLogin = (req, res) => {
  try {
    return res.status(201).json({
      message: "Login success",
    });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports = { userRegister, userLogin };
