import { Router } from 'express'
import { upload } from './config/multerConfig'


import { BookRepository } from './repositories/implementations/BookRepository'
import { CreateBookUseCase } from './useCases/createBook/CreateBookUseCase'
import { CreateBookController } from './useCases/createBook/CreateBookController'

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

export { router }
