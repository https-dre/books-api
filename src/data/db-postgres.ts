import { Pool } from "pg";
import * as dotenv from 'dotenv'

export const data = {
    dbPool : undefined as unknown as Pool,
    async conn() : Promise<void>
    {
        dotenv.config()

        this.dbPool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DATABASE,
            password : process.env.DB_PASSW as unknown as string,
            port : process.env.DB_PORT as unknown as number
        })

        console.log('PostgreSQL autenticado com Sucesso!!')
    }
}


