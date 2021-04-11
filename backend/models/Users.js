const User = require("./Schema");

const Create = async (data) => {
    const { userName, email, password } = data;
    const user = new User({
        userName: userName,
        email: email,
        password: password,
    });

    try {
        const result = await new Promise((resolve, reject) => {
            user.save(function (err, res) {
                if (err) {
                    reject(new Error(err.message));
                } else resolve(res);
            });
        });

        return result;
    } catch (err) {
        console.log(err.message);
    }
};

const UserVerification = async (email) => {
    const user = await User.findOne({ email: email });

    return user;
};

module.exports = {
    Create,
    UserVerification,
};
