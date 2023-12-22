import { Book } from "../models/Book.ts"

export interface IBookRepository {
	findByName(name: string): Promise<Book>;
	save(book : Book): Promise<void>;
}

