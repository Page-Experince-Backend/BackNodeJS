const userService = require('../services/userServices/index');

createNewAccount = (req, res, next) => {
    console.log("Create account");
}

validateAccount = (req, res, next) => {
    userService.validateEmailAccount.validateEmailAccount(req.body.data, res);
}

isCodeValid = (req, res, next) => {
    userService.isCodeValidService.isCodeValid(req.body.data, res);
}

module.exports = {
    createNewAccount,
    validateAccount,
    isCodeValid
}