const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.post('/', TaskController.createTask);
router.put('/:taskId', TaskController.updateTask);
router.delete('/:taskId', TaskController.deleteTask);
router.get('/', TaskController.viewTasks);

module.exports = router;