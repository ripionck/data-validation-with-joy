const Joi = require("joi");

exports.schemas = {
  registerSchema: Joi.object({
    name: Joi.string().min(5).max(31).required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).max(21).required(),
    confirmPassword: Joi.ref("password"),
    age: Joi.number().required(),
    languages: Joi.array().items(Joi.string()).required(),
    dob: Joi.date().greater(new Date("1990-01-01")).required(),
  }),
  loginSchema: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).max(21).required(),
  }),
};
