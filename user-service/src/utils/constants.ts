import dotenv from 'dotenv'
dotenv.config()

export const jwt_token: string = process.env.JWT_TOKEN || 'fsdjkfhsdjkfh';
export const jwt_refresh: string = process.env.JWT_REFRESH || 'fsdkfhsdjkfhkjfhdskjfs';