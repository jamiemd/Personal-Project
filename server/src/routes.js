const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const User = require('./user');
const Flashcards = require("./flashcards")
const express = require('express');
const CORS = require("cors");

const { sendUserError, hashedPassword, loggedIn } = require('./middleware');


const routes = (server) => {

    // signin user
    server.post('/api/login', (req, res) => {
        const { username, password } = req.body;
        if (!username) {
            sendUserError('Username undefined', res);
            return;
        }
        User.findOne({ username }, (err, user) => {
            if (err || user === null) {
                sendUserError('No user found at that id', res);
                return;
            }
            const hashedPw = user.passwordHash;
            bcrypt.compare(password, hashedPw)
                .then((response) => {
                    if (!response) throw new Error();
                    req.session.username = username;
                    req.user = user;
                })
                .then(() => {
                    res.json({ success: true });
                })
                .catch((error) => {
                    return sendUserError('some message here', res);
                });
        });
    });

    // signup user
    server.post('/api/users', hashedPassword, (req, res) => {
        console.log('register called')
        const { username } = req.body;
        const passwordHash = req.password;
        const newUser = new User({ username, passwordHash });
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(422);
                res.json({ 'Need both username/PW fields': err.message });
                return;
            }

            res.json(savedUser);
        });
    });

    // signout user
    server.post('/api/logout', (req, res) => {
        if (!req.session.username) {
            sendUserError('User is not logged in', res);
            return;
        }
        req.session.username = null;
        res.status(200).send("user logged out");
    });

    // get all users
    server.get('/api/users', (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                sendUserError('500', res);
                return;
            }
            res.json(users);
        });
    });


    // get all flashcards
    server.get("/api/flashcards", (req, res) => {
        Flashcards.find({})
            .then(function (flashcards) {
                res.status(200).json(flashcards);
            })
            .catch(function () {
                res.status(500).json({ error: "The information could not be retrieved" });
            });
    });

    // get all flashcards maybe?
    server.get("/api/flashcards", (req, res) => {
        res.status(200).json(Flashcards);
    });


}

module.exports = routes;
