import { Book } from "../../models/Book";
import { HttpResponse } from "../../models/Http";
import { BookRepository } from "../../repositories/implementations/BookRepository";

export class GetFileBookUseCase 
{
    private bookRepository : BookRepository

    constructor(obj : BookRepository)
    {
        this.bookRepository = obj
    }

    async execute(id : string): Promise<string | null>
    {
        const book = await this.bookRepository.findById(id)

        if(book)
        {
            return book.file
        }

        return null
    }
}