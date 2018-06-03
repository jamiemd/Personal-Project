const server = require("./server.js");

const { sendUserError, hashedPassword, loggedIn } = require("./middleware");

const routes = server => {
  // login
  server.post("/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/users/" + req.user.username);
  });

  // signup

  server.post("/api/users/adduser", function(req, res) {
    const newUser = new User(req.body);
    if (!newUser.username || !newUser.password || !newUser.email) {
      res.status(400).json({ error: "Missing required information" });
      return;
    }
    newUser.save((err, user) => {
      if (err) {
        if (err.name === "BulkWriteError") {
          res
            .status(STATUS_USER_ERROR)
            .json({ error: "Username already exists.", err });
        } else if (err.name === "ValidationError") {
          res.status(STATUS_USER_ERROR).json({
            error: "Password must be at least 8 characters.",
            err
          });
        } else {
          res
            .status(STATUS_USER_ERROR)
            .json({ error: "Error while adding", err });
        }
      } else {
        res.status(STATUS_OKAY).json(user);
      }
    });
  });

  // logout
  server.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};

module.exports = routes;
