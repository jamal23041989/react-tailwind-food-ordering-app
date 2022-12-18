const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 8080
const db = require('./db/db')
const productRouter = require('./routes/productRouter.js')
const corsOptions = { origin: 'http://localhost:3000' }

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Food Ordering' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use('/api/', productRouter)
