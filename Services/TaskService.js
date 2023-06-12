const Task = require('../models/taskModel');

class TaskService {
  async createTask(taskData) {
    return await Task.create(taskData);
  }

  async updateTask(taskId, taskData) {
    await Task.update(taskData, { where: { id: taskId } });
    return await Task.findByPk(taskId);
  }

  async deleteTask(taskId) {
    await Task.destroy({ where: { id: taskId } });
  }

  async getAllTasks() {
    return await Task.findAll();
  }
}

module.exports = new TaskService();
