import dotenv from 'dotenv';

// 환경에 따라 다른 .env 파일 로드
const env = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.local';
dotenv.config({ path: env });

export const db :string = process.env.DB_NAME || '';
export const db_host :string = process.env.DB_HOST || '';
export const db_user :string = process.env.DB_USER || '';
export const db_password :string= process.env.DB_PASSWORD || '';
export const db_port :number= Number(process.env.DB_PORT) || 3306;


