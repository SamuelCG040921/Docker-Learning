import { Sequelize } from "sequelize";

const isDocker = process.env.IS_DOCKER === 'true';

const sequelize = new Sequelize(
    process.env.DB_NAME || 'testDB',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'samuel0409',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        retry: {
            max: 10, 
          },
    }
);

export default sequelize;