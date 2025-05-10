import sequelize from '@/db/database';
import User from '@/models/User';

// 데이터베이스 연결 및 모델 동기화
async function start() {
  try {
    await sequelize.authenticate();  // MySQL 연결 확인
    console.log('Connection has been established successfully.');

    await sequelize.sync({ force: false });  // 테이블 동기화 (기존 데이터 삭제 후 동기화)
    console.log('Database synchronized.');

    // 예시로 사용자 추가
    // await User.create({
    //   name: 'John Doe',
    //   email: 'john.doe@example.com',
    // });

    // console.log('User created.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

start();
