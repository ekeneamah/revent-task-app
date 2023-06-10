import { Router } from 'express';
import { createTask, updateTask, deleteTask, viewTasks } from '../controllers/TaskController';

const router = Router();

router.post('/', createTask);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);
router.get('/', viewTasks);

export default router;
