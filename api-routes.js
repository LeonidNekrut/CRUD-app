let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
const todoController = require('./todoController');
router.route('/todos')
    .get(todoController.index)
    .post(todoController.new);
router.route('/todos/:todo_id')
    .get(todoController.view)
    .patch(todoController.update)
    .put(todoController.update)
    .delete(todoController.delete);
module.exports = router;