import { IBookRepository } from "../protocols/IBookRepository";
import { Book } from "../../models/Book";

export class BookRepository implements IBookRepository
{
    async save(book: Book): Promise<void> {
        
    }
    async findByName(name: string): Promise<Book | null> {
        try {
            return null
        } catch (error) {
            throw new Error('Erro no BookRepository')
        }
    }
}