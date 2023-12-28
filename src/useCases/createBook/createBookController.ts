import { Request, Response, response } from "express";
import { Book } from '../../models/Book';
import { CreateBookUseCase } from "./createBookUseCase";

export class CreateBookController {
    private createBookCase : CreateBookUseCase

    constructor( bookCase : CreateBookUseCase)
    {
        this.createBookCase = bookCase
    }

    async handle(request : Request, response : Response) : Promise<Response>
    {
        console.log('Chegou no Controller')
        const {name, autor} = request.body
        const file = request.file?.filename + '-' + request.body.name || null

        try {
            await this.createBookCase.execute({
                name, 
                autor,
                file
            })

            return response.status(201).json()
        } catch (error) {
            return response
            .status(400)
            .json({message : error.message || 'Unexpected Error.'})
        }
    }
}