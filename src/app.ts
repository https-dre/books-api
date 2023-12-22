import * as express from 'express'
import { router } from './routes.ts'
const app = express()

app.use(express.json())

app.use(router)

export { app }
