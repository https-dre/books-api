import { Book } from "../../models/Book"

export interface IBookRepository {
	save(book : Book): Promise<void>;
	findByName(name: string): Promise<Book[]>;
	findById(id : string): Promise<Book | null>;
}

