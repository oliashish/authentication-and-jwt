const UserModel = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Validation = require("./Validation");

const SignUp = async (data) => {
    // check for valid information

    const { error } = await Validation.signUpValidator(data);
    if (error) {
        return error.details[0].message;
    }
    //hashing password with salt

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;

    // check for email existance

    const emailExists = await UserModel.UserVerification(data.email);
    if (emailExists) return "email already exist";

    // calling models for creating new user

    const result = await UserModel.Create(data);
    return result;
};
const SignIn = async (data) => {
    // check for validation

    const { error } = await Validation.signInValidator(data);
    if (error) {
        return error.details[0].message;
    }
    // check if email exists

    const user = await UserModel.UserVerification(data.email);
    if (!user) return "Email or Password incorrect";

    // password validation
    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) return "Email or Password incorrect";

    // create and assign jwt
    const token = jwt.sign({ _id: user._id }, process.env.ACCESS_SECRET);
    return token;
};

const GetAllPosts = () => {
    const posts = {
        title: "this is title",
        desc: "this is dummy description",
    };
    return posts;
};

module.exports = { SignUp, SignIn, GetAllPosts };
