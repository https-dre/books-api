import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', "*");
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

export { app }
