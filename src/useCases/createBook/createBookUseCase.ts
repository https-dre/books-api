import { Book } from "../../models/Book"
import { IBookRepository } from "../../repositories/protocols/IBookRepository"
import { v4 as uuid} from "uuid"


export class CreateBookUseCase {
	private bookRepository : IBookRepository;
	constructor(repository : IBookRepository)
	{
		this.bookRepository = repository
	}

	async execute(book : Omit<Book,'id'>) : Promise<Book | null>
	{
		const bookFinded = await this.bookRepository.findByName(book.name);
		if(bookFinded)
		{
			throw new Error('O usuário já Existe')
		}
		
		const bookToSave : Book = {
			id: uuid(),
            name: book.name,
        	autor: book.autor,
        	file: book.file
		}


		await this.bookRepository.save(bookToSave)

		return bookToSave
	}
}
