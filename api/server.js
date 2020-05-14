
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const personsRouter = require('./persons/persons-router')
const programsRouter = require('./programs/programs-router')

const server = express()

server.use(cors())
server.use(helmet())
server.use(morgan('combined'))
server.use(express.json())

server.use('/api/persons', personsRouter)
server.use('/api/programs', programsRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'We up' })
})

module.exports = server