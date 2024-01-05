import { Pool, PoolClient } from "pg";
import * as dotenv from 'dotenv'

dotenv.config()

export const dbPool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password : process.env.DB_PASSW as unknown as string,
    port : process.env.DB_PORT as unknown as number
})

export const db_con = async () => {
    dbPool.on('connect', () => {
        console.log('PostgreSQL conectado com Sucesso!!')
    })
}

