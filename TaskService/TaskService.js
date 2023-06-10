import { Task } from '../models/Task';

class TaskService {
    async createTask(taskData) {
        try {
          return await Task.create(taskData);
        } catch (error) {
          throw new Error('Failed to create task');
        }
      }

      async updateTask(id, taskData) {
        try {
          const task = await Task.findByPk(id);
          if (!task) {
            throw new Error('Task not found');
          }
          return await task.update(taskData);
        } catch (error) {
          throw new Error('Failed to update task');
        }
      }

      async deleteTask(id) {
        try {
          const task = await Task.findByPk(id);
          if (!task) {
            throw new Error('Task not found');
          }
          await task.destroy();
          return true;
        } catch (error) {
          throw new Error('Failed to delete task');
        }
      }

  async getAllTasks() {
    try {
      return await Task.findAll();
    } catch (error) {
      throw new Error('Failed to fetch tasks');
    }
  }
}

export default TaskService;
