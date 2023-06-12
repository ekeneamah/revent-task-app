const request = require('supertest');
const app = require('../app');
const TaskService = require('../services/taskService');

jest.mock('../services/taskService', () => ({
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
  getAllTasks: jest.fn(),
}));

describe('TaskController', () => {
  it('should create a new task', async () => {
    TaskService.createTask.mockResolvedValue({ id: 1, title: 'Task 1' });

    const response = await request(app)
      .post('/')
      .send({ title: 'Task 1', description: 'Task description', createdBy: 'John', createdAt: new Date(), updatedBy: 'John', updatedAt: new Date(), status: 'active' });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: 1, title: 'Task 1' });
  });

  // Write similar tests for other methods of the TaskController
});
describe('TaskController', () => {
    it('should update an existing task', async () => {
      const mockTask = { id: 1, title: 'Task 1' };
      TaskService.updateTask.mockResolvedValue(mockTask);
  
      const response = await request(app)
        .put('/tasks/1')
        .send({ title: 'Updated Task 1' });
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTask);
    });
  
    it('should return an error if updating a task fails', async () => {
      TaskService.updateTask.mockRejectedValue(new Error('Failed to update task'));
  
      const response = await request(app)
        .put('/tasks/1')
        .send({ title: 'Updated Task 1' });
  
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to update task' });
    });
  
    it('should delete an existing task', async () => {
      const mockTask = { id: 1, title: 'Task 1' };
      TaskService.deleteTask.mockResolvedValue(mockTask);
  
      const response = await request(app).delete('/tasks/1');
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTask);
    });
  
    it('should return an error if deleting a task fails', async () => {
      TaskService.deleteTask.mockRejectedValue(new Error('Failed to delete task'));
  
      const response = await request(app).delete('/tasks/1');
  
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to delete task' });
    });
  
    it('should get all tasks', async () => {
      const mockTasks = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];
      TaskService.getAllTasks.mockResolvedValue(mockTasks);
  
      const response = await request(app).get('/tasks');
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTasks);
    });
  
    it('should return an error if getting all tasks fails', async () => {
      TaskService.getAllTasks.mockRejectedValue(new Error('Failed to get tasks'));
  
      const response = await request(app).get('/tasks');
  
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to get tasks' });
    });
  });