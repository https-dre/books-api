import { GetBookUseCase } from "./GetBookUseCase";
import { Request, Response } from 'express';


export class GetBookController {
    private getBookUseCase : GetBookUseCase

    constructor(getBook : GetBookUseCase)
    {
        this.getBookUseCase = getBook
    }

    async handle(request : Request, response : Response) : Promise<Response>
    {
        console.log('Chegou no controller')
        const { name } = request.query

        try {
            const result = await this.getBookUseCase.execute(name as unknown as string)

            return response.status(result.status).json(result.body)
        } catch (error : any) {
            console.log(error)
            return response.status(500).json({message : error.message || 'Unexpected Error.'})
        }
    }
}