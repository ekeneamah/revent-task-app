import express, { json } from 'express';
import taskRoutes from './routes/taskRoutes';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
