const mongoose = require('mongoose')

const Schema = mongoose.Schema;

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/flashcards', { useMongoClient: true });

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    passwordHash: {
        type: String,
    }
});

module.exports = mongoose.model('User', UserSchema);