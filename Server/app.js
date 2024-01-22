const express = require('express');
const cors = require('cors')
require('dotenv').config();

const mainRouter = require('./Routers/MainRouter')
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(express.json())

app.use('/', mainRouter)

app.listen(PORT, () => {
    console.log(`server started on ${PORT} port`)
})

