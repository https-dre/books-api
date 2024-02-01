import { expect, test } from 'vitest'
import { BookRepository } from './BookRepository';
import { Book } from '../../models/Book';
import { v4 as uuid} from "uuid"

test('Tentando Criar Livro', async () => {
    const book : Book = {
        id: uuid(),
        name: "O Código do Milhão",
        autor: "Pablo Marçal",
        file: "null"
    }
    const bookRepository = new BookRepository()

    await bookRepository.save(book)
})

test('Pesquisando Livros', async () => {
    const bookRepository = new BookRepository()

    const books = await bookRepository.findByName('O Código Do Milhão')

    console.log(books)

})