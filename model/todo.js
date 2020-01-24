const todos = [];
const getAll = () => {
    return todos;
};
  function create(todo) {
    todos.push(todo);
  }
  function deleteOne(id) {
    todos.splice(id, 1);
  }
module.exports = {
    getAll,
    create,
    deleteOne,
};