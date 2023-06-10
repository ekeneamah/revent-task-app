import { createTask as _createTask, updateTask as _updateTask, deleteTask as _deleteTask, getAllTasks } from '../services/TaskService';

class TaskController {
  static async createTask(req, res) {
    const { description } = req.body;
    try {
      const task = await _createTask(description);
      res.json(task);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async updateTask(req, res) {
    const { taskId } = req.params;
    const { description } = req.body;
    try {
      const task = await _updateTask(taskId, description);
      res.json(task);
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteTask(req, res) {
    const { taskId } = req.params;
    try {
      await _deleteTask(taskId);
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async viewTasks(req, res) {
    try {
      const tasks = await getAllTasks();
      res.json(tasks);
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

export default TaskController;
