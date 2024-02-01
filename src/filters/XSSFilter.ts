import { Request, Response, NextFunction } from "express"

export class XssFilter {

    static async map(request: Request, response: Response, next: NextFunction): Promise<void> {
        if (Object.keys(request.query).length === 0) {
            next()
        }
        else {
            const queryParamsArray = Object.entries(request.query);

            queryParamsArray.forEach((e => {
                let keyValue = e[1] as unknown as string

                if (keyValue.includes("</script>" || keyValue.includes("<script src=")) || keyValue.includes("<script")) {
                    return response.status(403).json("Query params error")
                }
                else {
                    next()
                }
            }))

        }
    }
}