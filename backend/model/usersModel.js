const {model} = require("mongoose");

const {UsersSchema} = require('../schemas/userSchema');

const UsersModel = model("user", UsersSchema);

module.exports ={ UsersModel };