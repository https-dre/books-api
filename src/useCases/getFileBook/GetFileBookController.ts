import { Book } from "../../models/Book";
import { GetFileBookUseCase } from "./GetFileBookUseCase";
import { Request, Response } from 'express'
import * as path from 'path'

export class GetFileBookController 
{
    private getFileBookUseCase : GetFileBookUseCase

    constructor(obj : GetFileBookUseCase)
    {
        this.getFileBookUseCase = obj
    }

    async handle(request : Request, response : Response) : Promise<void | Response>
    {
        const { id } = request.query

        try {
            const bookFile = await this.getFileBookUseCase.execute(id as unknown as string)
            if(bookFile)
            {
                const filepath = path.join(__dirname, '..','..','..','storage', bookFile)
                response.sendFile(filepath)
            }
            else
            {
                return response.status(404).json('Livro Not Found')
            }
            
        } catch (error : any) {
            console.log(error)
            return response.status(500).json({message : error.message || 'Unexpected Error.'})
        }
    }
}