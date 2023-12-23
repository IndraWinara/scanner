import express from 'express'
import { checkBar, registerBar } from '../controllers/bar.controller'

const barRouter = express.Router()

barRouter.post('/register-data',registerBar)
barRouter.post('/check-data',checkBar)

export default barRouter