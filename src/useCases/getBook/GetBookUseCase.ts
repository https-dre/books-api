import { Book } from "../../models/Book"
import { HttpResponse } from "../../models/Http"
import { IBookRepository } from "../../repositories/protocols/IBookRepository"

export class GetBookUseCase {
    private bookRepository : IBookRepository

    constructor(b : IBookRepository)
    {
        this.bookRepository = b
    }

    async execute(bookName : string) : Promise<HttpResponse>
    {
        try {
            const books = await this.bookRepository.findByName(bookName)
            if(books.length == 0)
            {
                return {
                    status: 404,
                    body: 'Livro not found'
                }
            }

            return {
                status: 200,
                body: books
            }
        } catch (error) {
            throw error
        }
    }
}