import { Router } from 'express'
import { upload } from './config/multerConfig'

import { BookRepository } from './repositories/implementations/BookRepository'

//CreateBook UseCases
import { CreateBookUseCase } from './useCases/createBook/CreateBookUseCase'
import { CreateBookController } from './useCases/createBook/CreateBookController'

//GetBook UseCases
import { GetBookUseCase } from './useCases/getBook/GetBookUseCase'
import { GetBookController } from './useCases/getBook/GetBookController';

const router = Router()

router.get('/', (req, res) => {
	res.send('Hello Word')
})

router.post('/post', upload.single('file'), (req, res)=>{
	const bookRepo = new BookRepository()
	const bookUseCase = new CreateBookUseCase(bookRepo)
	const bookController = new CreateBookController(bookUseCase)

	return bookController.handle(req, res)
})

router.get('/getBook', (req, res)=>{
	const bookRepo = new BookRepository()
	const getBookUseCase = new GetBookUseCase(bookRepo)
	const getBookController = new GetBookController(getBookUseCase)

	return getBookController.handle(req, res)
})

export { router }
