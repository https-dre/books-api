import { Request, Response, response } from "express";
import { Book } from '../../models/Book';
import { CreateBookUseCase } from "./CreateBookUseCase";

export class CreateBookController {
    private createBookCase : CreateBookUseCase

    constructor( bookCase : CreateBookUseCase)
    {
        this.createBookCase = bookCase
    }

    async handle(request : Request, response : Response) : Promise<Response>
    {
        try {
            const { name, autor } = request.body
            let filePath = request.file?.fieldname + '-' + name.replace(' ', '_') || null
            const result = await this.createBookCase.execute({
                name: name,
                autor: autor,
                epubPath: filePath
            })
            if(result)
            {
                return response.status(201).json(result)
            }
            return response.status(400).send('Erro ao cadastrar Livro')

        } catch (error) {
            return response.status(500).send('Erro interno no Servidor.')
        }
    }
}