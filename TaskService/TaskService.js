import { Task } from '../models/Task';

class TaskService {
  static async createTask(description) {
    try {
      const task = await Task.create(description);
      return task;
    } catch (error) {
      console.error('Error creating task:', error);
      throw new Error('An error occurred while creating the task');
    }
  }

  static async updateTask(taskId, description) {
    try {
      const task = await Task.update(taskId, description);
      return task;
    } catch (error) {
      console.error('Error updating task:', error);
      throw new Error('An error occurred while updating the task');
    }
  }

  static async deleteTask(taskId) {
    try {
      await Task.delete(taskId);
    } catch (error) {
      console.error('Error deleting task:', error);
      throw new Error('An error occurred while deleting the task');
    }
  }

  static async getAllTasks() {
    try {
      const tasks = await Task.getAll();
      return tasks;
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      throw new Error('An error occurred while retrieving the tasks');
    }
  }
}

export default TaskService;
