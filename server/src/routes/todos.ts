import express from 'express';
import Todo from '../models/Todo';

const router = express.Router();

router.get('/', async (req, res) => {
 const todos = await Todo.find();
 res.send(todos);
});

router.post('/', async (req, res) => {
 const todo = new Todo({
    name: req.body.name,
    checked: false,
 });
 await todo.save();
 res.send(todo);
});

router.put('/:id', async (req, res) => {
 const { id } = req.params;
 const { checked } = req.body;
 const updatedTodo = await Todo.findByIdAndUpdate(id, { checked }, { new: true });
 res.send(updatedTodo);
});

router.delete('/:id', async (req, res) => {
 const { id } = req.params;

 console.log(id);
 
 await Todo.findByIdAndDelete(id);
 res.send({ message: 'Todo deleted' });
});

export default router;
