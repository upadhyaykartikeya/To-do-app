const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()
const port = 3000

app.use(express.json());

app.post('/todo', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeparse(createPayload);
  if(!parsedPayload.success) {
    res.status.json({
      msg : "You sent the wrong input",
    })
    return;
  }
  
})

app.get("/todos", (req, res) => {
  
})

app.post('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
      res.status.json({
        msg: "You sent the wrong input",
      })
      return;
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})