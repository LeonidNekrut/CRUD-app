const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
        "text": {
            type: String,
            required: true
    }
});

const Todos = module.exports = mongoose.model('todo', todoSchema);
module.exports.get = function (callback, limit) {
    Todos.find(callback).limit(limit);
};