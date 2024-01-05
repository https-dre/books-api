import { Router } from 'express'
import { upload } from './config/multerConfig'

import { BookRepository } from './repositories/implementations/BookRepository'

//CreateBook UseCases
import { CreateBookUseCase } from './useCases/createBook/CreateBookUseCase'
import { CreateBookController } from './useCases/createBook/CreateBookController'

//GetBook UseCases
import { GetBookUseCase } from './useCases/getBook/GetBookUseCase'
import { GetBookController } from './useCases/getBook/GetBookController';

//GetFileBook UseCases
import { GetFileBookUseCase } from './useCases/getFileBook/GetFileBookUseCase';
import { GetFileBookController } from './useCases/getFileBook/GetFileBookController';

const router = Router()

router.get('/', (req, res) => {
	res.send('Hello Word')
})

router.post('/post', upload.single('file'), (req, res)=>{
	const bookRepo = new BookRepository()
	const bookUseCase = new CreateBookUseCase(bookRepo)
	const bookController = new CreateBookController(bookUseCase)

	bookController.handle(req, res)
})

router.get('/getBook', (req, res)=>{
	const bookRepo = new BookRepository()
	const getBookUseCase = new GetBookUseCase(bookRepo)
	const getBookController = new GetBookController(getBookUseCase)

	getBookController.handle(req, res)
})

router.get('/download', (req, res)=>{
	const bookRepo = new BookRepository()
	const getFileBookUseCase = new GetFileBookUseCase(bookRepo)
	const getFileBookController = new GetFileBookController(getFileBookUseCase)

	getFileBookController.handle(req, res)
})

export { router }
