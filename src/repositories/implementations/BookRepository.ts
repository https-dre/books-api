import { IBookRepository } from "../protocols/IBookRepository";
import { Book } from "../../models/Book";

export class BookRepository implements IBookRepository
{
    async save(book: Book): Promise<void> {
        
    }
    async findByName(name: string): Promise<Book> {
        try {
            return {
                id: "1",
                name : "O Pequeno Príncipe",
                autor: "Autor",
                epubPath: "Ablabla"
            }
        } catch (error) {
            throw new Error('Erro no BookRepository')
        }
    }
}