const joi = require('joi');
const { password } = require('../../../models/users-schema');
const { changePassword } = require('./users-controller');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      password_confirm: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('Password confirm'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePasword: {
    body: {
      oldPassword: joi.string().required().label('old password'),
      newPassword: joi.string().min(6).max(32).required().label('New Password'),
      confirmPassword: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('Confirm Password'),
    },
  },
};
