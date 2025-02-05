const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: description
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}