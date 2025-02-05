const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require("./db");
const app = express()
const port = 3000

app.use(express.json());

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeparse(createPayload);
  if(!parsedPayload.success) {
    res.status.json({
      msg : "You sent the wrong input",
    })
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })
  res.json({
    msg: "Todo created"
  })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
      todo
    })

})

app.post('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
      res.status.json({
        msg: "You sent the wrong input",
      })
      return;
    }
    await todo.update({
      _id: req.body.id
    }, {
      completed: true
    })
    res.json({
      msg: "Todo marked as completed"
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})