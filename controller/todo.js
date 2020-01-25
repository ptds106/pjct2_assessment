const Todo = require("../model/todo");

const index = (req, res) => {
    res.render("index", {
        todos: Todo.getAll(),
    });
};

function create(req, res) {
    req.body.done = "Not Done";
    Todo.create(req.body);
    res.redirect("/");
}

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect("/");
}

module.exports = {
    index,
    create,
    delete: deleteTodo,
};