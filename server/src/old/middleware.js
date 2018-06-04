const User = require('./user');
const bcrypt = require('bcrypt');

// send error
const sendUserError = (err, res) => {
    res.status(422);
    if (err && err.message) {
        res.json({ message: err.message, stack: err.stack });
    } else {
        res.json({ error: err });
    }
};

// get hashed password
const hashedPassword = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        sendUserError('Please enter a password', res);
        return;
    }
    bcrypt
        .hash(password, 11)
        .then((pw) => {
            req.password = pw;
            next();
        })
        .catch((err) => {
            throw new Error(err);
        });
};

// check login and return user
const loggedIn = (req, res, next) => {
    const { username } = req.session;
    if (!username) {
        sendUserError('User is not logged in', res);
        return;
    }
    User.findOne({ username }, (err, user) => {
        if (err) {
            sendUserError(err, res);
        } else if (!user) {
            sendUserError('User does not exist', res)
        } else {
            req.user = user;
            next();
        }
    });
}

module.exports.hashedPassword = hashedPassword;
module.exports.loggedIn = loggedIn;
module.exports.sendUserError = sendUserError;
