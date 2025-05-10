import { Sequelize } from "sequelize";
import { db, db_host, db_user, db_password, db_port } from '@/db/const';

const sequelize = new Sequelize(db, db_user, db_password, {
  host: db_host,
  port: db_port,
  dialect: 'mysql',
  logging: true,
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDB(); // 실행

export default sequelize;
