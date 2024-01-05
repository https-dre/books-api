import { IBookRepository } from "../protocols/IBookRepository";
import { Book } from '../../models/Book';
import { data } from "../../data/db-postgres";

export class BookRepository implements IBookRepository
{
    async save(book: Book): Promise<void> {
        try {
            const db = await data.dbPool.connect()

            const { rows } = await db.query(`
                INSERT INTO books (id, name, autor, file) VALUES ( $1, $2, $3, $4)
            `, [book.id, book.name, book.autor, book.file])

            db.release()

        } catch (error) {
            console.log(error)
            throw new Error('Erro ao Salvar Livro')
        }
    }
    async findByName(name: string): Promise<Book[]> {
        try {
            const db = await data.dbPool.connect()

            const result = await db.query(`
                SELECT * FROM books WHERE name = $1
            `,[name])

            db.release()

            const rows : Book[] = result.rows

            return rows
            
        } catch (error) {
            console.log(error)
            throw new Error('Erro no BookRepository')
        }
    }

    async findById(id: string): Promise<Book | null> {
        try {
            const db = await data.dbPool.connect()

            const { rows } = await db.query(`
                SELECT * FROM books WHERE id = $1
            `,[id])

            if(rows.length > 0)
            {
                const book : Book = rows[0]
                return book
            }

            return null
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}