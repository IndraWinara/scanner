import express, { NextFunction, Request, Response } from 'express'

import cors from 'cors'
import barRouter from './routes/bar.route'


export const app = express()


app.use(cors())
app.use(express.json())


//route
app.use('/api/v1',barRouter)


app.get('/testing',(req : Request, res : Response)=>{
    res.status(200).json({
        success : true,
        message : 'Server Connected'
    })
})


app.all('*',(req : Request, res : Response)=>{
    res.status(500).json({
        success : false,
        message : `Route : ${req.originalUrl} not found`
    })
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  });