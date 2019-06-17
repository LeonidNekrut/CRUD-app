Todos = require('./todoModel');

exports.index = function (req, res) {
    Todos.get(function (err, todos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Todo retrieved successfully",
            data: todos
        });
    });
};

exports.new = function (req, res) {
    const todos = new Todos();
    todos.text = req.body.text ? req.body.text : todos.text;
    todos.save(function () {
        res.json({
            message: 'New todo created!',
                data: todos
        });
    });
};
exports.view = function (req, res) {
    Todos.findById(req.params.todo_id, function (err, todos) {
        if (err)
            res.send(err);
        res.json({
            message: 'Todo details loading..',
                data: todos
        });
    });
};
exports.update = function (req, res) {
    Todos.findById(req.params.todo_id, function (err, todos) {
        if (err)
            res.send(err);
        todos.text = req.body.text ? req.body.text : todos.text;
        todos.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Todo Info updated',
                    data: todos
            });
        });
    });
};
exports.delete = function (req, res) {
    Todos.remove({
        _id: req.params.todo_id
    }, function (err) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Todo deleted'
        });
    });
};