import { Book } from "../../models/Book"

export interface IBookRepository {
	findByName(name: string): Promise<Book | null>;
	save(book : Book): Promise<void>;
}

