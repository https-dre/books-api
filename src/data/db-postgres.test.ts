import { dbPool } from "./db-postgres"
import { expect, test } from 'vitest'
import { QueryResult } from "pg"

test('Conectar ao Banco de Dados', async () => {
    const client = await dbPool.connect()
})

test('Realizar uma Query', async () => {
    const client = await dbPool.connect()

    const result = await client.query('SELECT * FROM books LIMIT 100')
})

test('Insert no PostgreSQL', async () => {
    const client = await dbPool.connect()

    const result = await client.query(`INSERT INTO books (id, name, autor, file) VALUES ('3','Nome do LIvro', 'Autor do Livro', 'FilePath')`)
})