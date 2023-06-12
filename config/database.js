// config/database.js

//import { Sequelize } from 'sequelize';
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database: process.env.POSTGRES_DATABASE | "postgres",
    username: process.env.POSTGRES_USER | "revent",
    password: process.env.POSTGRES_PASSWORD | "52@Taskdb",
    host: process.env.POSTGRES_HOST | "taskdb.postgres.database.azure.com",
    port: process.env.POSTGRES_PORT | 5432,

 
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Use this option if you encounter self-signed certificate errors
      },
    },
  });

  sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Unable to connect to the database:', err));


module.exports=sequelize;
