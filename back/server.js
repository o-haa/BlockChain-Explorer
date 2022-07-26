const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 4000

const blockRouter = require('./routes/blockRouter')
const txRouter = require('./routes/txRouter')
const searchRouter = require('./routes/searchRouter')
const accountRouter = require('./routes/accountRouter')

app.use(express.json())

app.use(
    cors({
        origin: ['http://localhost:3000'],
        credentials: true,
    }),
)

app.use('/block', blockRouter)
app.use('/tx', txRouter)
app.use('/search', searchRouter)
app.use('/accounts', accountRouter)

app.listen(PORT, () => {
    console.log('back start')
})
