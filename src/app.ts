import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use((__req, res, next) => {
    res.append('Access-Control-Allow-Origin', "*");
    res.append('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    next();
});

app.use(router)

export { app }