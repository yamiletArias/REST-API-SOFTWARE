//ECma scrip module
import express from 'express'
import softwaresRouters from './routes/softwares.routes.js'

const app = express()

app.use(express.json()) //Server rrecibe el json
app.use('/api/', softwaresRouters);

export default app
