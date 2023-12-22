import { Request, Response } from "express";
import { Book } from '../../models/Book';
import { CreateBookUseCase } from "./createBookUseCase";

export class CreateBookController {
    private createBookCase : CreateBookUseCase

    constructor( bookCase : CreateBookUseCase)
    {
        this.createBookCase = bookCase
    }
}