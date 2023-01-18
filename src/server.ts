import express, {Request , Response , Application} from 'express'
import modules from './modules'

const app: Application = express()
app.use(express.json())
app.use(modules)

app.listen(5050 , () => console.log(':5050/home'))