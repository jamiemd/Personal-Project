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
    server.post('/api/signin', (req, res) => {
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
    server.post('/api/signup', hashedPassword, (req, res) => {
        console.log('register called')
        const { username } = req.body;
        const passwordHash = req.password;
        const newUser = new User({ username, passwordHash });
        newUser.save((err, savedUser) => {
            if (err) {
                console.log('err', err);
                res.status(422);
                res.json({ 'Need both username/PW fields': err.message });
                return;
            }
            res.json(savedUser);
        });
    });

    // signout user
    server.post('/api/signout', (req, res) => {
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

    // check loggein
    server.get('/api/me', loggedIn, (req, res) => {
        res.send({ user: req.user, session: req.session });
    });

    // get all flashcards
    server.get("/api/flashcards", (req, res) => {
        let currentDate = new Date();
        Flashcards
            .find({})
            // .find({ "ReviewDate": { "$lte": currentDate } })
            .then(function (flashcards) {
                res.status(200).json(flashcards);
            })
            .catch(function () {
                res.status(500).json({ error: "The information could not be retrieved" });
            });
    });

    server.get("/api/getStats", (req, res) => {
        Flashcards
            .find({})
            .then(function (flashcards) {
                res.status(200).json(flashcards);
            })
            .catch(function () {
                res.status(500).json({ error: "The information could not be retrieved" });
            });
    });


    // update bucket
    server.put("/api/updateBucket", function (req, res) {
        const { id, newBucket } = req.body;
        // console.log('id', id, 'newbucket', newBucket);

        let dateNow = new Date();
        let newDate = new Date();
        if (newBucket === 1) {
            newDate.setDate(dateNow.getDate() + 0);
        } else if (newBucket === 2) {
            newDate.setDate(dateNow.getDate() + 1);
        } else if (newBucket === 3) {
            newDate.setDate(dateNow.getDate() + 3);
        } else if (newBucket === 4) {
            newDate.setDate(dateNow.getDate() + 10);
        } else if (newBucket === 5) {
            newDate.setDate(dateNow.getDate() + 15);
        }

        // console.log('datenow no +1', newDate);

        Flashcards.findByIdAndUpdate(id, { currentBucket: newBucket, ReviewDate: newDate })
            .then(function (bucket) {
                res.status(200).json(bucket);
            })
            .catch(function () {
                res.status(500).json({ error: "The information could not be updated" });
            });
    });



}

module.exports = routes;