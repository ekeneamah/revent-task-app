import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

class Task {
  static async create(description) {
    try {
      const query = 'INSERT INTO tasks (description) VALUES ($1) RETURNING *';
      const values = [description];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      console.error('Error creating task:', err);
      throw new Error('An error occurred while creating the task');
    }
  }

  static async update(taskId, description) {
    try {
      const query = 'UPDATE tasks SET description = $1 WHERE id = $2 RETURNING *';
      const values = [description, taskId];
      const result = await pool.query(query, values);
      if (result.rows.length === 0) {
        throw new Error('Task not found');
      }
      return result.rows[0];
    } catch (err) {
      console.error('Error updating task:', err);
      throw new Error('An error occurred while updating the task');
    }
  }

  static async delete(taskId) {
    try {
      const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
      const values = [taskId];
      const result = await pool.query(query, values);
      if (result.rows.length === 0) {
        throw new Error('Task not found');
      }
    } catch (err) {
      console.error('Error deleting task:', err);
      throw new Error('An error occurred while deleting the task');
    }
  }

  static async getAll() {
    try {
      const query = 'SELECT * FROM tasks';
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      console.error('Error retrieving tasks:', err);
      throw new Error('An error occurred while retrieving the tasks');
    }
  }
}

export default Task;
