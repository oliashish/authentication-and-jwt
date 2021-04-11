const Joi = require("@hapi/joi");

const signUpValidator = (data) => {
    const SignUpSchema = Joi.object({
        userName: Joi.string().min(4).required(),
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(8).required(),
    });

    return SignUpSchema.validate(data);
};

const signInValidator = (data) => {
    const SignInSchema = Joi.object({
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(8).required(),
    });
    return SignInSchema.validate(data);
};

module.exports = {
    signInValidator,
    signUpValidator,
};
