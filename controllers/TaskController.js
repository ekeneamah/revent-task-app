const TaskService = require('../services/taskService');

class TaskController {
  async createTask(req, res) {
    try {
      const taskData = req.body;
      const task = await TaskService.createTask(taskData);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  }
  
  async updateTask(req, res) {
    try {
      const taskId = req.params.id;
      const taskData = req.body;
      const task = await TaskService.updateTask(taskId, taskData);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  }

  async deleteTask(req, res) {
    try {
      const taskId = req.params.id;
      await TaskService.deleteTask(taskId);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }

  async viewTasks(req, res) {
    try {
      const tasks = await TaskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }
}

module.exports = new TaskController();
